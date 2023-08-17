import returnFetch, { ReturnFetch } from './returnFetch';

// Write your own high order function to throw an error if a response status is more than or equal to 400.
export const returnFetchThrowingErrorByStatusCode: ReturnFetch = args =>
  returnFetch({
    ...args,
    interceptors: {
      response: async response => {
        if (response.status >= 400) {
          throw await response.text().then(Error);
        }

        return response;
      },
    },
  });
