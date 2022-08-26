import {
  ALL,
  FILTER_AUTHOR,
  FILTER_CATEGORY,
  SEARCH
} from "../constants/blogConstants";
import { initialState } from "./initialState";

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FILTER_AUTHOR:
      const newState = state.filter((state) => state.author.includes(payload));
      return newState;
    case FILTER_CATEGORY:
      const newCategory = state.filter((state) =>
        state.category.includes(payload)
      );
      return newCategory;
    case SEARCH:
      const newUpdatedState = state.filter((state) =>
        state.title.toLowerCase().includes(payload)
      );
      return newUpdatedState;
    case ALL:
      return initialState;
    default:
      return state;
  }
};

export default blogReducer;
