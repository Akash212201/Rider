const express=require("express");
const router=express.Router();

// course controller import

//categories controller import

//section controlller import

//subsection controlller import

// rating and review controller import

// importing middleware
const {auth,isStudent,isAdmin,isInstructor}=require("../middlewares/auth");


// creating routes created by instructor
router.post("/createCourse",auth,isInstructor,createCourese);
router.post("/addSection",auth,isInstructor,createsection);
router.post("/updateSection",auth,isInstructor,updatesection);
router.post("/deleteSection",auth,isInstructor,deletesection);
router.post("/createSubSection",auth,isInstructor,createsubsection);
router.post("/updateSubSection",auth,isInstructor,updatesubsection);
router.post("/deleteSubSection",auth,isInstructor,deletesubsection);
router.get("/getAllCourses",auth,showallcourses);
router.post("/getCourseDetails",getcoursedetails);


// routes created by admin
router.post("/createCategory",auth,isAdmin,createCategory);
router.get("/showAllCategories",getallcategory);
router.post("/getCategoryPageDetails",categorypagedetails);

// rating and review created by student 

router.post("/createRating",auth,isStudent,createrating);
router.get("/getAverageRating",averagerating);
router.get("/getReviews",allratingreviews);

module.exports=router;