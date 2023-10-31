/**
 * 유저 정보
 */
export interface UserInfo {
  id: number;
  imageUrl: string;
  email: string;
  name: string;
  interests: string;
}

/**
 * 유저 정보 업데이트 Params
 */
export type UserInfoParams = Partial<UserInfo>;

/**
 * 유저 관련 zustand actions
 */
interface UserActions {
  /**
   * 유저 정보를 저장하는 함수
   */
  setUserInfo: (userInfo: UserInfoParams) => void;
}

/**
 * 유저 관련 zustand state
 */
export interface UserState {
  /**
   * 유저 정보
   */
  userInfo: UserInfo;
  /**
   * Action 함수
   */
  actions: UserActions;
}
