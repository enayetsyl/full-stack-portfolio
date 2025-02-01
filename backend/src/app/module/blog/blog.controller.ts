import catchAsync from "../../utils/catchAsync";
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary";
import sendResponse from "../../utils/sendResponse";
import { BlogService } from "./blog.service";

const GetAllBlogs = catchAsync(async (req, res) => {
  const result = await BlogService.GetAllBlogs();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blogs fetched successfully",
    data: result,
  });
});

const DeleteBlog = catchAsync(async (req, res) => {
  const { blogId } = req.params;
  console.log('blog to delete', blogId)
  const result = await BlogService.DeleteBlog(blogId);
  
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog deleted successfully",
    data: result,
  });
});

const EditBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  

  const result = await BlogService.EditBlog(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog updated successfully",
    data: result,
  });
});

const CreateBlog = catchAsync(async (req, res) => {
  const {
    title,
    description,
    link
  } = req.body;


  const imageFile = req.file as Express.Multer.File;

  if (!imageFile) {
    throw new Error("Image file is required");
  }

  const cloudinaryResult = await sendImageToCloudinary(
    imageFile.originalname,
    imageFile.path
  );

  const payload = {
    title,
    description,
    link,
    image: cloudinaryResult.secure_url as string,
  };

  const result = await BlogService.CreateBlog(payload);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Blog created successfully",
    data: result,
  });
});

export const BlogController = {
  CreateBlog,
  GetAllBlogs,
  DeleteBlog,
  EditBlog,
};
