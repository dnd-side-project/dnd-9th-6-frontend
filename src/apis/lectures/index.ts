import { objToQueryString } from 'utils/objToQueryString';
import isEmpty from 'lodash/isEmpty';
import instance from '..';
import { LecturesParams, LecturesResponse } from './types';

const LECTURES_API_URL = '/lectures';

const LECTURES_API = {
  search: async (params?: LecturesParams['get']) => {
    const queryString = isEmpty(params) ? '' : `?${objToQueryString(params)}`;
    return instance.get<LecturesResponse, LecturesResponse>(
      LECTURES_API_URL + queryString
    );
  },
};

export default LECTURES_API;
