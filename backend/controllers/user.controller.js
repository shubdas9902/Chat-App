import User from "../models/user.model.js"

export const getuserForSidebar=async(req,res)=>{
   try {
     
    const loggedInUserId=req.user._id
    const filteredUser= await User.find({_id:{$ne:loggedInUserId}}).select("-password")

    return res.status(200).json(filteredUser)

   } catch (error) {
    console.log("Error in getuserforsidebar controller:",error.message)
    res.status(500).json({error:"Internal Server Error"})
   }
}