import { UserInfo } from 'store/types/user';

/**
 * 유저 정보 조회 결과
 */
export interface GetUserInfo extends GlobalResponse {
  data: UserInfo;
}

/**
 * 유저 정보 업데이트 시 전달할 데이터
 */
export interface UpdateUserInfo {
  name: string;
  interests: string[];
}

/**
 * 유저 관심분야 추가 요청
 */
export interface AddInterests {
  interests: string[];
}
