import instance from '..';

import { BookmarkResponse } from './types';

const BOOKMARK_API_URL = '/auth/bookmark';

const BOOKMARK_API = {
  get: async () => {
    return instance.get<BookmarkResponse>(BOOKMARK_API_URL);
  },
  post: async (params: FormData) => {
    return instance.post(BOOKMARK_API_URL, params, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  delete: async (params: string) => {
    return instance.delete(`${BOOKMARK_API_URL}?lectureId=${params}`);
  },
};

export default BOOKMARK_API;
