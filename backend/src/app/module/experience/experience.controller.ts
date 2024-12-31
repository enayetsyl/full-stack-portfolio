import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ExperienceService } from "./experience.service";


// Below you can see the application of catchAsync function. 
const CreateExperience = catchAsync(async (req, res) => {
   
  const result = await ExperienceService.CreateExperience(req.body );

  // Below you can see the use of custom sendResponse function to make the code base clean. 
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Experience created succesfully',
    data: result,
  });
});


const GetAllExperience = catchAsync(async (req, res) => {
   
  const result = await ExperienceService.GetAllExperience();

  // Below you can see the use of custom sendResponse function to make the code base clean. 
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Experience fetched succesfully',
    data: result,
  });
});



export const ExperienceController = {
  CreateExperience,
  GetAllExperience
 };