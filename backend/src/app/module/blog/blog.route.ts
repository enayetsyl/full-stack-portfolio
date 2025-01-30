import express from "express"
import { BlogController } from "./blog.controller";
import { upload } from "../../utils/sendImageToCloudinary";


const router = express.Router();

router.post("/create-blog", upload.single("image"), BlogController.CreateBlog);
router.get("/get-all-blog", BlogController.GetAllBlogs);
router.delete("/delete-blog/:blogId", BlogController.DeleteBlog);
router.patch("/edit-blog/:blogId", BlogController.EditBlog);


export const BlogRoutes = router;