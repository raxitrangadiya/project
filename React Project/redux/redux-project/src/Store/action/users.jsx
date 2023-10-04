export const retriveUser=()=>async(dispatch)=>{
    console.log("retrive all users");
  return dispatch
  ({type:"RETRIVE_ALL_USERS",payload:{"anything data":"provide by action users"}})
}