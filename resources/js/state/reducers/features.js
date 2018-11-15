import { ADD_FEATURE } from "../actions/actionTypes";

const initialState = "React+Redux";

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_FEATURE: {
      const { feature } = action.payload;
      return state + feature;
    }
    default:
      return state;
  }
}