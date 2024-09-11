"use server";
import { saveBlogComment } from "@services/blogService";
import { revalidatePath } from "next/cache";

export const handleSubmitComment = async (formData) => {
  const rawFormData = {
    comment: formData.get("comment"),
    userName: formData.get("userName"),
    userEmail: formData.get("userEmail"),
    userWebsite: formData.get("userWebsite"),
  };
  return rawFormData;
};
