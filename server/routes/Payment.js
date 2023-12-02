const express=require("express");
const router=express.Router();

const {capturepayment, verifysignature}=require("../controllers/Payment");

const {auth,isStudent,isInstructor,isAdmin}=require("../middlewares/auth");

router.post("/capturePayment",auth,isStudent,capturepayment);
router.post("/verifySignature",verifysignature);

module.exports=router;