"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const router = express_1.default.Router();
router.post("/create-blog", sendImageToCloudinary_1.upload.single("image"), blog_controller_1.BlogController.CreateBlog);
router.get("/get-all-blog", blog_controller_1.BlogController.GetAllBlogs);
router.delete("/delete-blog/:blogId", blog_controller_1.BlogController.DeleteBlog);
router.patch("/edit-blog/:blogId", blog_controller_1.BlogController.EditBlog);
exports.BlogRoutes = router;
