import BOOKMARK_API from 'apis/bookmark';
import { Bookmark, BookmarkResponse } from 'apis/bookmark/types';
import { AxiosError, AxiosResponse } from 'axios';
import { BOOKMARK_KEY } from 'constants/querykeys';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';

export const useGetBookmark = (options?: UseQueryOptions<AxiosResponse<BookmarkResponse>, AxiosError, Bookmark[]>) => {
  return useQuery<AxiosResponse<BookmarkResponse>, AxiosError, Bookmark[]>(
    BOOKMARK_KEY.details(),
    () => BOOKMARK_API.get(),
    {
      ...options,
    }
  );
};
