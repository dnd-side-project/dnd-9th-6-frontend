import { ReviewsResponse } from 'apis/review/types';

import instance from '..';

import { BookmarkParams, BookmarkResponse } from './types';

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
  delete: async (params: BookmarkParams) => {
    return instance.delete<ReviewsResponse>(BOOKMARK_API_URL, { data: params });
  },
};

export default BOOKMARK_API;
