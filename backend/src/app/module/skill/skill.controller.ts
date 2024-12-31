import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SkillService } from "./skill.service";


// Create a new skill
const CreateSkill = catchAsync(async (req, res) => {
  const result = await SkillService.CreateSkill(req.body);

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
