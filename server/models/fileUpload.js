import {mongoose} from "mongoose";

const fileSchema = new mongoose.Schema({
    filename:{
        type:String,
        required:true,
    },
    filepath:{
        type:String,
        required:true,
    },
    filetype: {
        type:String,
        required:true,
    },
    filesize: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }    
})

const file = mongoose.model('file', fileSchema);

export default file;