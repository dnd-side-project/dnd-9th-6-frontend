import { create } from 'zustand';
import { UserInfoParams, UserState } from './types/user';

export const userStore = create<UserState>(set => ({
  userInfo: {
    id: 0,
    imageUrl: '',
    email: '',
    name: '',
    interests: '',
  },
  actions: {
    setUserInfo: (params: UserInfoParams) =>
      set(state => ({
        userInfo: {
          id: params.id ?? state.userInfo.id,
          imageUrl: params.imageUrl ?? state.userInfo.imageUrl,
          name: params.name ?? state.userInfo.name,
          email: params.email ?? state.userInfo.email,
          interests: params.interests ?? state.userInfo.interests,
        },
      })),
  },
}));

// State
export const useUserInfo = () => userStore(state => state.userInfo);
export const useUserId = () => userStore(state => state.userInfo.id);
export const useUserImageUrl = () =>
  userStore(state => state.userInfo.imageUrl);
export const useUserEmail = () => userStore(state => state.userInfo.email);
export const useUserName = () => userStore(state => state.userInfo.name);
export const useUserInterests = () =>
  userStore(state => state.userInfo.interests);

// Actions
export const useUserActions = () => userStore(state => state.actions);
