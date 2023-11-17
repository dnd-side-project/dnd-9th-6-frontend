import instance from '..';

import { ScopeLecturesResponse, ScopeRecentResponse, ScopeReviewsResponse } from './types';

const SCOPE_API = {
  /**
   * 별점 높은 수강 후기 조회
   */
  reviews: async () => instance.get<ScopeReviewsResponse>('/lectures/scope/reviews'),
  /**
   * 강의력 좋은 강의 조회
   */
  lectures: async () => instance.get<ScopeLecturesResponse>('/lectures/scope/lectures'),
  /**
   * 최근 올라온 후기 조회
   */
  recent: async () => instance.get<ScopeRecentResponse>('/review/recent'),
};

export default SCOPE_API;
