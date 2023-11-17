import LECTURES_API from 'apis/lectures';
import { Lecture, LecturesParams, LecturesResponse } from 'apis/lectures/types';
import { AxiosError, AxiosResponse } from 'axios';
import { LECTURES_KEY } from 'constants/querykeys';

import { useInfiniteQuery, UseInfiniteQueryOptions, useQuery, UseQueryOptions } from '@tanstack/react-query';

export const useGetLectures = (
  params?: LecturesParams,
  options?: UseQueryOptions<AxiosResponse<LecturesResponse>, AxiosError, Lecture[]>
) => {
  return useQuery<AxiosResponse<LecturesResponse>, AxiosError, Lecture[]>(
    LECTURES_KEY.list([{ ...params }]),
    () => LECTURES_API.search(params),
    {
      ...options,
    }
  );
};

export const useGetInfiniteLectures = (
  params?: LecturesParams,
  options?: UseInfiniteQueryOptions<AxiosResponse<LecturesResponse>, AxiosError, LecturesResponse['data']>
) =>
  useInfiniteQuery<AxiosResponse<LecturesResponse>, AxiosError, LecturesResponse['data']>(
    LECTURES_KEY.list([{ ...params }]),
    ({ pageParam = 0 }) => LECTURES_API.search({ ...params, page: pageParam }),
    {
      getNextPageParam: ({
        data: {
          data: { totalPages, pageNumber },
        },
      }) => {
        const nextPage = pageNumber + 1;
        return totalPages > pageNumber ? nextPage : undefined;
      },
      ...options,
    }
  );
