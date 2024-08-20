"use server";
import "server-only";
import { sendGetRequest, sendPostRequest } from "./requestService";
const getShowBlog = async () => {
  return sendGetRequest("/blog/show");
};

const getBlogByCategory = async (query) => {
  return sendGetRequest(`/blog/filter?${query}`);
};
const getAllBlogCategory = async () => {
  return sendGetRequest(`/blog/categories`);
};

const getBlogById = async (id) => {
  return sendGetRequest(`/blog/${id}`);
};

const saveBlogComment = async (id, body) => {
  return sendPostRequest(`/blog/comments/${id}`, body);
};

export { getShowBlog, getBlogByCategory, getAllBlogCategory, getBlogById, saveBlogComment };
