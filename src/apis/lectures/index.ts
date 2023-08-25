import { objToQueryString } from 'utils/objToQueryString';
import instance from '..';
import { LecturesParams, LecturesResponse } from './types';

const lecturesApi = {
  search: async (lecturesParams: LecturesParams['lecturesParameter']) => {
    const query = lecturesParams ? objToQueryString(lecturesParams) : '';
    return instance.get<LecturesResponse['search'], LecturesResponse['search']>(
      `${'/lectures' + query}`,
    );
  },
};

export default lecturesApi;