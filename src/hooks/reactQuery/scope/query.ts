import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import scopeApi from 'apis/scope';
import { ScopeParams, ScopeResponse } from 'apis/scope/types';
import { AxiosError } from 'axios';
import { SCOPE_KEY } from 'constants/querykeys';

export const useGetScopeReviews = (
  options?: UseQueryOptions<ScopeResponse['reviews'], AxiosError>,
) => {
  return useQuery<ScopeResponse['reviews'], AxiosError>(
    SCOPE_KEY.list(['reviews']),
    () => scopeApi.reviews(),
    { ...options },
  );
};

export const useGetScopeLectures = (
  options?: UseQueryOptions<ScopeResponse['lectures'], AxiosError>,
) => {
  return useQuery<ScopeResponse['lectures'], AxiosError>(
    SCOPE_KEY.list(['lectures']),
    () => scopeApi.lectures(),
    { ...options },
  );
};

export const useGetScopeRecent = (
  options?: UseQueryOptions<ScopeResponse['recent'], AxiosError>,
) => {
  return useQuery<ScopeResponse['recent'], AxiosError>(
    SCOPE_KEY.list(['recent']),
    () => scopeApi.recent(),
    { ...options },
  );
};

export const useGetScopeKeyword = (
  params?: ScopeParams['scopeKeyword'],
  options?: UseQueryOptions<ScopeResponse['keywords'], AxiosError>,
) => {
  return useQuery<ScopeResponse['keywords'], AxiosError>(
    SCOPE_KEY.list([{ ...params }]),
    () => scopeApi.keywords(params),
    {
      ...options,
    },
  );
};
