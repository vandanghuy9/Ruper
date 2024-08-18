"use server";
import { saveBlogComment } from "@services/blogService";
import { revalidatePath } from "next/cache";

export const handleSubmitComment = async (id, formData) => {
  const rawFormData = {
    comment: formData.get("comment"),
    userName: formData.get("userName"),
    userEmail: formData.get("userEmail"),
    userWebsite: formData.get("userWebsite"),
  };
  try {
    saveBlogComment(id, formData).then((res) => {
      revalidatePath(`/blog/[[...slug]]/page`, "page");
    });
  } catch (e) {
    console.error(e);
  }
};
