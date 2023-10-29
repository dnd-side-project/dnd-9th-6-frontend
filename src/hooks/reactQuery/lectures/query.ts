import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import LECTURES_API from 'apis/lectures';
import { LecturesParams, LecturesResponse } from 'apis/lectures/types';
import { AxiosError, AxiosResponse } from 'axios';
import { LECTURES_KEY } from 'constants/querykeys';

export const useGetLectures = (
  params?: LecturesParams,
  options?: UseQueryOptions<AxiosResponse<LecturesResponse>, AxiosError>
) => {
  return useQuery<AxiosResponse<LecturesResponse>, AxiosError>(
    LECTURES_KEY.list([{ ...params }]),
    () => LECTURES_API.search(params),
    {
      ...options,
    }
  );
};

export const useGetInfiniteLectures = (
  params?: LecturesParams,
  options?: UseInfiniteQueryOptions<AxiosResponse<LecturesResponse>, AxiosError>
) =>
  useInfiniteQuery<AxiosResponse<LecturesResponse>, AxiosError>(
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
