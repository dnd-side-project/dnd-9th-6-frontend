import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import SCOPE_API from 'apis/scope';
import {
  ScopeLecturesResponse,
  ScopeRecentResponse,
  ScopeReviewsResponse,
} from 'apis/scope/types';
import { AxiosError, AxiosResponse } from 'axios';
import { SCOPE_KEY } from 'constants/querykeys';

export const useGetScopeReviews = (
  options?: UseQueryOptions<
    AxiosResponse<ScopeReviewsResponse>,
    AxiosError,
    ScopeReviewsResponse
  >
) => {
  return useQuery<
    AxiosResponse<ScopeReviewsResponse>,
    AxiosError,
    ScopeReviewsResponse
  >(SCOPE_KEY.list(['reviews']), () => SCOPE_API.reviews(), { ...options });
};

export const useGetScopeLectures = (
  options?: UseQueryOptions<
    AxiosResponse<ScopeLecturesResponse>,
    AxiosError,
    ScopeLecturesResponse
  >
) => {
  return useQuery<
    AxiosResponse<ScopeLecturesResponse>,
    AxiosError,
    ScopeLecturesResponse
  >(SCOPE_KEY.list(['lectures']), () => SCOPE_API.lectures(), { ...options });
};

export const useGetScopeRecent = (
  options?: UseQueryOptions<
    AxiosResponse<ScopeRecentResponse>,
    AxiosError,
    ScopeRecentResponse
  >
) => {
  return useQuery<
    AxiosResponse<ScopeRecentResponse>,
    AxiosError,
    ScopeRecentResponse
  >(SCOPE_KEY.list(['recent']), () => SCOPE_API.recent(), { ...options });
};
