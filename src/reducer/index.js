import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../Slices/authslice"
import Profile from "../Slices/Profile";
import Blurslice from "../Slices/Blur"
import Course from "../Slices/Course";

const rootReducer=combineReducers({
    auth:authSlice,
    profile:Profile,
    blur:Blurslice,
    course:Course
    
})

export default rootReducer;