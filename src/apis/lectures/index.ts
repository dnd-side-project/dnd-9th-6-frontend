import { objToQueryString } from 'utils/objToQueryString';
import instance from '..';
import { LecturesParams, LecturesResponse } from './types';
import _ from 'lodash';

const lecturesApi = {
  search: async (lecturesParams?: LecturesParams['lecturesParameter']) => {
    const queryString = _.isEmpty(lecturesParams) ? '' : `?${objToQueryString(lecturesParams)}`;
    return instance.get<LecturesResponse['search'], LecturesResponse['search']>(
      `${'/lectures' + queryString}`,
    );
  },
};

export default lecturesApi;