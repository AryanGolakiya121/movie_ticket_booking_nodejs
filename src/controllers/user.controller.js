import { asyncHandler } from "../utils/asyncHandler.js"


const registerUser = asyncHandler(async(req, res) => {
    const { userName, email, password, role } = req.body;
    
})