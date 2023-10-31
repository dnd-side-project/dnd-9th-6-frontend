import { USER_API } from 'constants/api';
import instance from '..';
import { AddInterests, GetUserInfo, UpdateUserInfo } from './types';

const userApi = {
  /**
   * 유저 정보 조회
   */
  get: async () => instance.get<GetUserInfo>(USER_API.GET_USER_INFO),
  /**
   * 유저 정보 업데이트
   */
  patch: async (param: Partial<UpdateUserInfo>) => {
    return instance.patch<UpdateUserInfo>(USER_API.UPDATE_USER_INFO, {
      nickName: param.nickName,
      interests: param.interests,
    });
  },
  /**
   * 유저 관심분야 추가
   */
  postInterests: async (param: AddInterests) =>
    instance.post<AddInterests>(USER_API.POST_INTERESTS, param),
};

export default userApi;
