import {
  FILTER_BY_LAUNCH_YEAR,
  FILTER_BY_LAUNCH_SUCCESS,
  FILTER_BY_LANDING_SUCCESS,
} from "./ActionType";

export const filterByLaunchYear = (year) => {
  return {
    type: FILTER_BY_LAUNCH_YEAR,
    payload: year,
  };
};

export const filterByLaunchSuccess = (status) => {
  return {
    type: FILTER_BY_LAUNCH_SUCCESS,
    payload: status,
  };
};

export const filterByLandingSuccess = (status) => {
  return {
    type: FILTER_BY_LANDING_SUCCESS,
    payload: status,
  };
};
