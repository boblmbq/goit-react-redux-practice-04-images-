import { SUMBIT_QUERY } from './actionTypes';

export const submitQuery = text => ({
  type: SUMBIT_QUERY,
  payload: text,
});
