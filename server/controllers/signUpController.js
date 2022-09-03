import signUpDetails from "../models/SignupDetails.js";


export const signUp = async(req,res,next) => {
    const data = req.body;
    console.log("Inside signUp controller :"+data);
    const register_user = new signUpDetails(data);
    try {
        await register_user.save();
        res.status(200).send("User registered successfully"); 
    }
    catch(error) {
        console.log(error);
        res.status(400).send(error);
    }
}
