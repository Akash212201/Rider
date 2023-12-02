const BASE_URL=process.env.REACT_APP_BASE_URL
export const categories={
    CATEGORIE_API:BASE_URL+"/course/showAllCategories"
}
export const auth={
    RESETPASSWORDTOKEN_API:BASE_URL+"/user/reset-password-token",
    RESETPASSWORD_API:BASE_URL+"/user/reset-password",
    UPDATEPASSWORD_API:BASE_URL+"/user/update-password",
    SENDOTP_API:BASE_URL+"/user/sendotp",
    SIGNUP_API:BASE_URL+"/user/signup",
    LOGIN_API:BASE_URL+"/user/login"
}



export const setting={
    UPDATEDISPLAY_PICTURE:BASE_URL+"/profile/updateDisplayPicture",
    DELETE_PROFILE:BASE_URL+"/profile/deleteProfile",
    UPDATE_PROFILE:BASE_URL+"/profile/updateProfile",
    CHANGEPASSWORD:BASE_URL+"/user/changepassword"
}

export const courses={
    GETENROLLEDCOURSES:BASE_URL+"/course/getAllCourses",
    GETALLCATEGORIES:BASE_URL+"/course/showAllCategories"
}

