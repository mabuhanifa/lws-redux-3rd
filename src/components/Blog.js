import React from "react";
import { useDispatch } from "react-redux";
import { filter_author, filter_category } from "../redux/actions/blogActions";

const Blog = ({ blog }) => {
  const { category, title, author, img, a_img, date, time } = blog;
  const dispatch = useDispatch();
  const filterAuthor = (a) => {
    dispatch(filter_author(a));
  };
  const filterCategory = (a) => {
    dispatch(filter_category(a));
  };
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={img} alt="" />
      </div>

      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p
            onClick={() => filterCategory(category)}
            className="text-sm font-medium text-indigo-600"
          >
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              {category}
            </span>
          </p>
         
            <p className="block mt-3 text-xl font-semibold text-gray-900">{title}</p>
         
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <img
              src={a_img}
              onClick={() => filterAuthor(author)}
              className="h-10 w-10 rounded-full"
              alt="img"
            />
          </div>
          <div className="ml-3">
            <p
              onClick={() => filterAuthor(author)}
              className="text-sm font-medium text-gray-900 hover:underline"
            >
              {author}
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time>{date}</time>
              <span aria-hidden="true">&middot;</span>
              <span> {time} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
