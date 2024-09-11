"use server";
import "server-only";
import { sendGetRequest, sendPostRequest } from "./requestService";
import { revalidatePath } from "next/cache";

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

const saveBlogComment = async (body) => {
  const res = await sendPostRequest(`/blog/comments`, body);
  revalidatePath(`/blog/${body._id}`, "page");
  return res;
};

export {
  getShowBlog,
  getBlogByCategory,
  getAllBlogCategory,
  getBlogById,
  saveBlogComment,
};
