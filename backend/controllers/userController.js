const userModel = require("../models/userModel");




const register = async(req, res) =>{

    console.log(req.body, "req.body")

    const {name, email, password} = req.body.formData

    try{

   const user = new userModel({
       
    userName:name,
    email:email,

    password:password
       
   });
      
     if(!user) return console.log('null data');
        
     const result = await user.save();
     
     
     res.status(200).json(result);
     
     
    }catch(err){

    console.log(err)

}


}






const login = async(req, res) =>{
    

    const {email, password} = req.body.formData

    try{
        
        
        const user = await userModel.findOne({email:email});
        

        if(!user) return console.log('no user found with this email');


        res.status(200).json(user);
        

    }catch(err){
        

        console.log(err)
        

    }
    
    
}


const fetchSingleUserProfile = async(req, res)=>{

    console.log(req.params.userid);

try{

   const user = await userModel.findOne({_id:req.params.userid})

   console.log(user)

   res.status(200).json(user);

}catch(err){

  console.log(err)

}


}








const searchUsers = async(req, res) =>{


 
    
    const search = req.query.search || ""

    const query = {

      userName:{$regex:search, $options:"i"},
  
    }


    try{

    const users = await userModel.find(query);

     res.status(200).json(users);

    }catch(err){
  
        console.log(err);

    }


}







module.exports = {

    register,
    login,
    fetchSingleUserProfile,
    searchUsers
   

}








