import { atom } from 'recoil';
import { UserInfo } from 'recoil/types/user';
import { STATE_KEYS } from './keys';

const userInfo = atom<UserInfo | null>({
  key: STATE_KEYS.user,
  default: null,
});

export { userInfo };
