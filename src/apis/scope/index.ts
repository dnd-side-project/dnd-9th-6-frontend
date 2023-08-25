import { objToQueryString } from 'utils/objToQueryString';
import instance from '..';
import { ScopeParams, ScopeResponse } from './types';

const scopeApi = {
  /**
   * 별점 높은 수강 후기 조회
   */
  reviews: async () =>
    instance.get<ScopeResponse['reviews'], ScopeResponse['reviews']>(
      '/lectures/scope/reviews',
    ),
  /**
   * 강의력 좋은 강의 조회
   */
  lectures: async () =>
    instance.get<ScopeResponse['lectures'], ScopeResponse['lectures']>(
      '/lectures/scope/lectures',
    ),
  /**
   * 최근 올라온 후기 조회
   */
  recent: async () =>
    instance.get<ScopeResponse['recent'], ScopeResponse['recent']>(
      '/review/recent',
    ),
  /**
   * 후기 키워드 조회
   */
  keywords: async (scopeKeyword: ScopeParams['scopeKeyword']) => {
    const query = scopeKeyword ? objToQueryString(scopeKeyword) : '';
    return instance.get<ScopeResponse['keywords'], ScopeResponse['keywords']>(
      `${'/review/keyword' + query}`,
    );
  },
};

export default scopeApi;