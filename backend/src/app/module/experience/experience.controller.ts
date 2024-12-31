import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ExperienceService } from './experience.service';

const CreateExperience = catchAsync(async (req, res) => {
  const result = await ExperienceService.CreateExperience(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Experience created succesfully',
    data: result,
  });
});

const GetAllExperience = catchAsync(async (req, res) => {
  const result = await ExperienceService.GetAllExperience();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Experience fetched succesfully',
    data: result,
  });
});

const UpdateExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ExperienceService.UpdateExperience(id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Experience updated successfully',
    data: result,
  });
});

export const ExperienceController = {
  CreateExperience,
  GetAllExperience,
  UpdateExperience,
};
