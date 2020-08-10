import {
  FILTER_BY_LAUNCH_YEAR,
  FILTER_BY_LAUNCH_SUCCESS,
  FILTER_BY_LANDING_SUCCESS,
} from "./ActionType";

//state
const yearState = {
  year:null,
  launchStatus:null,
  landingStatus:null,
};


//reducer
const reducer = (state = yearState, action) => {
  switch (action.type) {
    case FILTER_BY_LAUNCH_YEAR:
      return { ...state, year: action.payload };
    case FILTER_BY_LAUNCH_SUCCESS:
      return { ...state, launchStatus: action.payload };
    case FILTER_BY_LANDING_SUCCESS:
      return { ...state, landingStatus: action.payload };
    default:
      return state;
  }
};

export default reducer;
