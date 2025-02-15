"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const blog_service_1 = require("./blog.service");
const GetAllBlogs = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_service_1.BlogService.GetAllBlogs();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Blogs fetched successfully",
        data: result,
    });
}));
const DeleteBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { blogId } = req.params;
    console.log('blog to delete', blogId);
    const result = yield blog_service_1.BlogService.DeleteBlog(blogId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Blog deleted successfully",
        data: result,
    });
}));
const EditBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield blog_service_1.BlogService.EditBlog(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Blog updated successfully",
        data: result,
    });
}));
const CreateBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, link } = req.body;
    const imageFile = req.file;
    if (!imageFile) {
        throw new Error("Image file is required");
    }
    const cloudinaryResult = yield (0, sendImageToCloudinary_1.sendImageToCloudinary)(imageFile.originalname, imageFile.path);
    const payload = {
        title,
        description,
        link,
        image: cloudinaryResult.secure_url,
    };
    const result = yield blog_service_1.BlogService.CreateBlog(payload);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "Blog created successfully",
        data: result,
    });
}));
exports.BlogController = {
    CreateBlog,
    GetAllBlogs,
    DeleteBlog,
    EditBlog,
};
