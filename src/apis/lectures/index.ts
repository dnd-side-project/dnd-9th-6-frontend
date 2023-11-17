import instance from '..';

import { LecturesParams, LecturesResponse } from './types';

const LECTURES_API_URL = '/lectures';

const LECTURES_API = {
  search: async (params?: LecturesParams) => {
    return instance.get<LecturesResponse>(LECTURES_API_URL, {
      params,
    });
  },
};

export default LECTURES_API;
