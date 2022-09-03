import signUpDetails from "../models/SignupDetails.js";

export const signIn = async (req,res,next) => {
    try {
        const users = await signUpDetails.find();
        res.status(200).send(users);
    }catch(error) {
        res.status(400).send(error.message);
    }
}
