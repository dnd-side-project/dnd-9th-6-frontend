import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import lecturesApi from 'apis/lectures';
import { LecturesParams, LecturesResponse } from 'apis/lectures/types';
import { AxiosError } from 'axios';
import { LECTURES_KEY } from 'constants/querykeys';

export const useGetLecturesParameter = (
  params?: LecturesParams['lecturesParameter'],
  options?: UseQueryOptions<LecturesResponse['search'], AxiosError>
) => {
  return useQuery<LecturesResponse['search'], AxiosError>(
    LECTURES_KEY.list([{ ...params }]),
    () => lecturesApi.search(params),
    {
      ...options,
    }
  );
};
