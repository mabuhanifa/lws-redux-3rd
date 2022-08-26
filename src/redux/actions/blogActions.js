import {
    ALL,
    FILTER_AUTHOR,
    FILTER_CATEGORY,
    SEARCH
} from "../constants/blogConstants";

export const searchTitle = (value) => {
  return {
    type: SEARCH,
    payload: value,
  };
};
export const filter_author = (value) => {
  return {
    type: FILTER_AUTHOR,
    payload: value,
  };
};
export const filter_category = (value) => {
  return {
    type: FILTER_CATEGORY,
    payload: value,
  };
};

export const all = () => {
  return {
    type: ALL,
  };
};
