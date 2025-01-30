import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const CreateBlog = async (payload: IBlog) => {
 const result = await Blog.create(payload);
  return result;
}
const GetAllBlogs = async () => {
const result = await Blog.find().lean();
  return result;
}
const DeleteBlog = async (id: string) => {
const result = await Blog.findByIdAndDelete(id);
  if (!result) {
    throw new Error('Blog not found');
  }
  return result;
}
const EditBlog = async (id: string) => {

}

export const BlogService = {
  CreateBlog,
  GetAllBlogs,
  DeleteBlog,
  EditBlog,
};