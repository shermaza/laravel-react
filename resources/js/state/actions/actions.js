import { ADD_FEATURE } from './actionTypes';

export const addFeature = (feature) => ({
  type: ADD_FEATURE,
  payload: {
    feature
  }
});