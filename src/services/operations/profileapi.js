import { setloading } from "../../Slices/Profile";
import { apiconnector } from "../apioperator";
import { courses } from "../apis";
import {toast} from 'react-toastify';

const {GETENROLLEDCOURSES}=courses;

export const showallcourses=(token)=>{
    return async(dispatch)=>{
        let result=[];
   try{
    dispatch(setloading(true));
    const response=await apiconnector("GET",GETENROLLEDCOURSES,null,{
        Authorisation:`Bearer ${token}`
    })
    if(!response.data.success){
        throw new Error("failed to show all courses");
    }
    result = response.data.data;
    
    toast.success("Get enrolled courses successfully");
    dispatch(setloading(false));
   }catch(error){
throw new Error("failed ");
   }
    }
}