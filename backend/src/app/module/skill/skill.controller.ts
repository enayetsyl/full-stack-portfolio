import catchAsync from "../../utils/catchAsync";
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary";
import sendResponse from "../../utils/sendResponse";
import { SkillService } from "./skill.service";


// Create a new skill
const CreateSkill = catchAsync(async (req, res) => {
  const { name } = req.body;

  // Ensure an image file is uploaded
  if (!req.file) {
    throw new Error("Image is required");
  }

  // Upload image to Cloudinary
  const imageUploadResult = await sendImageToCloudinary(
    `skills/${Date.now()}-${req.file.originalname}`,
    req.file.path
  );

  console.log('image uplaod', imageUploadResult)
  // Save skill with the Cloudinary image URL
  const newSkill = {
    name,
    image: imageUploadResult.secure_url as string, // Save the URL returned from Cloudinary
  };

  const result = await SkillService.CreateSkill(newSkill);
  

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Skill created successfully',
    data: result,
  });
});

// Get all skills
const GetAllSkills = catchAsync(async (req, res) => {
  const result = await SkillService.GetAllSkills();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skills fetched successfully',
    data: result,
  });
});

// Delete a skill
const DeleteSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillService.DeleteSkill(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skill deleted successfully',
    data: result,
  });
});


export const SkillController = {
  CreateSkill,
  GetAllSkills,
  DeleteSkill,
};
