import React from "react";
import { useDispatch, useSelector } from "react-redux";
import icon from "../assets/favicon.png";
import searchIcon from "../assets/search.svg";
import { all, searchTitle } from "../redux/actions/blogActions";
import { initialState } from "../redux/reducer/initialState";
import Blog from "./Blog";
const Blogs = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 2000);
    };
  };
  const search = (a) => {
    dispatch(searchTitle(a.toLowerCase()));
  };
  const optimized = debounce(search);

  return (
    <div>
      <nav className="bg-slate-100 shadow-md">
        <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
          <img className="h-10" src={icon} alt="Learn with Sumit" />
        </div>
      </nav>
      {/* <!-- search --> */}
      <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
        <input
          className="outline-none border-none bg-gray-50 h-full w-full mr-2"
          type="search"
          name="search"
          placeholder="Search"
          onChange={(e) => optimized(e.target.value)}
          onClick={(e) => optimized(e.target.value)}
        />
        <img
          className="inline h-6 cursor-pointer"
          src={searchIcon}
          alt="Search"
        />
      </div>
      <div>
        <div className="flex justify-center p-5">
          <button
            onClick={() => dispatch(all())}
            className={
              state === initialState
                ? "hidden"
                : "bg-red-600 text-white p-2 rounded"
            }
          >
            Clear Filter & Search
          </button>
        </div>
      </div>
      <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              ALL BLOGS ARE HERE
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
          </div>
          {/* <!-- card grid  --> */}
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {state.map((blog) => {
              return <Blog blog={blog} key={blog.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
