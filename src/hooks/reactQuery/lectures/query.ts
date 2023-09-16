import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import LECTURES_API from 'apis/lectures';
import { LecturesParams, LecturesResponse } from 'apis/lectures/types';
import { AxiosError } from 'axios';
import { LECTURES_KEY } from 'constants/querykeys';

export const useGetLectures = (
  params?: LecturesParams['get'],
  options?: UseQueryOptions<LecturesResponse, AxiosError>
) => {
  return useQuery<LecturesResponse, AxiosError>(
    LECTURES_KEY.list([{ ...params }]),
    () => LECTURES_API.search(params),
    {
      ...options,
    }
  );
};

export const useGetInfiniteLectures = (
  params?: LecturesParams['get'],
  options?: UseInfiniteQueryOptions<LecturesResponse, AxiosError>
) =>
  useInfiniteQuery<LecturesResponse, AxiosError>(
    LECTURES_KEY.list([{ ...params }]),
    ({ pageParam = 1 }) => LECTURES_API.search({ ...params, page: pageParam }),
    {
      getNextPageParam: ({ totalPages, pageNumber }) => {
        const nextPage = pageNumber + 1;
        return totalPages > pageNumber ? nextPage : undefined;
      },
      ...options,
    }
  );
