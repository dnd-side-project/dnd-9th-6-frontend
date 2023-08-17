/**
 * fetch 함수의 Arguments
 *
 * @throws {Error} fetch의 첫 번째 arguments가 `Request` 객체인 경우 string과 URL만 지원합니다.
 * @see {fetch, RequestInfo, Request}
 *
 * @public
 */
export type FetchArgs = [string | URL, RequestInit | undefined];

/**
 * `returnFetch` 함수의 타입
 *
 * 커스텀 returnFetch 함수 작성하려는 사람에게 유용합니다.
 *
 * @public
 */
export type ReturnFetch = typeof returnFetch;

/**
 * = `returnFetch` 함수 옵션
 *
 * @public
 */
export type ReturnFetchDefaultOptions = {
  /**
   * `fetch` 함수에서 사용될 `returnFetch` 함수.
   *
   * 제공하지 않으면, `fetch` 함수가 전역에서 사용됩니다.
   *
   * `node-fetch`, `cross-fetch`, `isomorphic-fetch` 등 모든 fetch 라이브러리를 구현한 함수를 사용할 수 있습니다.
   *
   * 반환된 `Fetch`에 의해 생성된 `fetch` 함수도 여기에 사용할 수 있습니다.
   *
   * @public
   */
  fetch?: ReturnType<ReturnFetch>;
  /**
   * * fetch의 baseUrl입니다.
   *
   * @public
   */
  baseUrl?: string | URL;
  /**
   * fetch의 기본 헤더. fetch의 두 번째 arguments에 `headers` 속성이 없을 때 사용됩니다.
   *
   * `fetch`를 호출할 때 `headers`도 함께 제공하면 헤더가 병합됩니다.
   *
   * 헤더의 우선순위는 `requestInit.headers` > `defaultOptions.headers`입니다. 중복된 헤더는 덮어쓰기됩니다.
   *
   * @public
   */
  headers?: HeadersInit;
  interceptors?: {
    /**
     * Request interceptor. 요청 전에 호출됩니다.
     *
     * @param requestArgs fetch 함수의 arguments
     * @param fetch {@link ReturnFetchDefaultOptions['fetch']}에서 제공한 `fetch`를 가져옵니다.
     *
     * @public
     */
    request?: (
      requestArgs: FetchArgs,
      fetch: NonNullable<ReturnFetchDefaultOptions['fetch']>,
    ) => Promise<FetchArgs>;
    /**
     * Response interceptor. 요청 후에 호출됩니다.
     *
     * @param response fetch 함수에서 반환된 response 객체
     * @param requestArgs fetch 함수의 arguments
     * @param fetch {@link ReturnFetchDefaultOptions['fetch']} 에서 제공한 `fetch`를 가져옵니다.
     *
     * @public
     */
    response?: (
      response: Response,
      requestArgs: FetchArgs,
      fetch: NonNullable<ReturnFetchDefaultOptions['fetch']>,
    ) => Promise<Response>;
  };
};

const applyDefaultOptions = (
  [input, requestInit]: FetchArgs,
  defaultOptions?: ReturnFetchDefaultOptions,
): FetchArgs => {
  const headers = new Headers(defaultOptions?.headers);
  new Headers(requestInit?.headers).forEach((value, key) => {
    headers.set(key, value);
  });

  let inputToReturn: FetchArgs[0] = input;
  if (defaultOptions?.baseUrl) {
    inputToReturn = new URL(input, defaultOptions.baseUrl);
  }

  return [
    inputToReturn,
    {
      ...requestInit,
      headers,
    },
  ];
};

const mergeRequestObjectWithRequestInit = (
  request: Request,
  requestInit?: RequestInit,
): Promise<RequestInit> => {
  const mergedRequest = new Request(request, requestInit);
  return new Response(mergedRequest.body).arrayBuffer().then(body => ({
    method: mergedRequest.method,
    headers: mergedRequest.headers,
    body: body,
    referrer: mergedRequest.referrer,
    referrerPolicy: mergedRequest.referrerPolicy,
    mode: mergedRequest.mode,
    credentials: mergedRequest.credentials,
    cache: mergedRequest.cache,
    redirect: mergedRequest.redirect,
    integrity: mergedRequest.integrity,
    keepalive: mergedRequest.keepalive,
    signal: mergedRequest.signal,
    window: requestInit?.window,
  }));
};

const normalizeArgs = async (
  ...args: Parameters<typeof fetch>
): Promise<FetchArgs> => {
  let input: string | URL;
  let requestInit: RequestInit | undefined;
  if (args[0] instanceof Request) {
    input = args[0].url;
    requestInit = await mergeRequestObjectWithRequestInit(args[0], args[1]);
  } else {
    input = args[0];
    requestInit = args[1];
  }

  return [input, requestInit];
};

const returnFetch =
  (defaultOptions?: ReturnFetchDefaultOptions) =>
  async (...args: Parameters<typeof fetch>): Promise<Response> => {
    const defaultOptionAppliedArgs = applyDefaultOptions(
      await normalizeArgs(...args),
      defaultOptions,
    );

    // apply request interceptor
    const fetchProvided = defaultOptions?.fetch || fetch;
    let requestInterceptorAppliedArgs: FetchArgs;
    if (defaultOptions?.interceptors?.request) {
      requestInterceptorAppliedArgs =
        await defaultOptions?.interceptors?.request?.(
          defaultOptionAppliedArgs,
          fetchProvided,
        );
    } else {
      requestInterceptorAppliedArgs = defaultOptionAppliedArgs;
    }

    // ajax call
    const response = await fetchProvided(...requestInterceptorAppliedArgs);

    // apply response interceptor
    return (
      defaultOptions?.interceptors?.response?.(
        response,
        requestInterceptorAppliedArgs,
        fetchProvided,
      ) || response
    );
  };

export default returnFetch;
