"use server";
import "server-only";
import { sendGetRequest } from "./requestService";
const getShowBlog = async () => {
  return sendGetRequest("/blog/show");
};

const getBlogByCategory = async (query) => {
  return sendGetRequest(`/blog/filter?${query}`);
};
const getAllBlogCategory = async () => {
  return sendGetRequest(`/blog/categories`);
};

export { getShowBlog, getBlogByCategory, getAllBlogCategory };
