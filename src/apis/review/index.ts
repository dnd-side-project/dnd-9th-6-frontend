import instance from '..';

import { ReviewRequest } from './types';

const REVIEW_API_URL = '/review';

const REVIEW_API = {
  /**
   * 내 후기 조회
   * @header Authorization: JWT Token
   */
  get: async () => instance.get(REVIEW_API_URL),
  /**
   * 후기 작성
   * @header Authorization: JWT Token
   * @param data 후기 작성 데이터
   */
  post: async (data: ReviewRequest) => instance.post(REVIEW_API_URL, data),
  /**
   * 후기 수정
   * @header Authorization: JWT Token
   * @param data 후기 수정 데이터
   */
  patch: async (data: ReviewRequest) => instance.patch(REVIEW_API_URL, data),
  /**
   * 후기 삭제
   * @header Authorization: JWT Token
   * @param reviewId 후기 ID
   */
  delete: async (reviewId: string) => instance.delete(REVIEW_API_URL, { data: { reviewId } }),

  /**
   * 후기 좋아요 토글
   * @header Authorization: JWT Token
   * @param reviewId 후기 ID
   */
  like: async (reviewId: string) => instance.post(`${REVIEW_API_URL}/like`, { reviewId }),
};

export default REVIEW_API;
