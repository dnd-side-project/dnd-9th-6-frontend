import { ReviewsResponse } from 'apis/review/types';

import instance from '..';

import { DetailLectureResponse, LecturesParams, LecturesResponse } from './types';

const LECTURES_API_URL = '/lectures';

const LECTURES_API = {
  search: async (params?: LecturesParams) => {
    return instance.get<LecturesResponse>(LECTURES_API_URL, {
      params,
    });
  },
  detail: async (id: number) => {
    return instance.get<DetailLectureResponse>(`${LECTURES_API_URL}/${id}`);
  },
  review: async (id: number) => {
    return instance.get<ReviewsResponse>(`${LECTURES_API_URL}/${id}/reviews`);
  },
};

export default LECTURES_API;
