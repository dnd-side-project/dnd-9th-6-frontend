import { Token } from 'store/types/token';
import { UserInfo } from 'store/types/user';

/**
 * 회원가입 또는 로그인 시 응답 데이터
 */
export interface SignInResponse extends GlobalResponse {
  data: UserInfo & Token;
}

export interface UpdateUserInfoRequest {
  nickname: string;
  interests: string[];
}

export interface PostInterestsRequest {
  interests: string[];
}
