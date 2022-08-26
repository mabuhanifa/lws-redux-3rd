import { createStore } from "redux";
import blogReducer from "../reducer/blogReducers";

const store = createStore(blogReducer);

export default store;
