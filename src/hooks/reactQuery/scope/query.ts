import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import SCOPE_API from 'apis/scope';
import { ScopeResponse } from 'apis/scope/types';
import { AxiosError } from 'axios';
import { SCOPE_KEY } from 'constants/querykeys';

export const useGetScopeReviews = (
  options?: UseQueryOptions<ScopeResponse['reviews'], AxiosError>
) => {
  return useQuery<ScopeResponse['reviews'], AxiosError>(
    SCOPE_KEY.list(['reviews']),
    () => SCOPE_API.reviews(),
    { ...options }
  );
};

export const useGetScopeLectures = (
  options?: UseQueryOptions<ScopeResponse['lectures'], AxiosError>
) => {
  return useQuery<ScopeResponse['lectures'], AxiosError>(
    SCOPE_KEY.list(['lectures']),
    () => SCOPE_API.lectures(),
    { ...options }
  );
};

export const useGetScopeRecent = (
  options?: UseQueryOptions<ScopeResponse['recent'], AxiosError>
) => {
  return useQuery<ScopeResponse['recent'], AxiosError>(
    SCOPE_KEY.list(['recent']),
    () => SCOPE_API.recent(),
    { ...options }
  );
};
