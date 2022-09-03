import file from "../models/fileUpload.js";

export const uploadFile = async (req, res,next) => {
    try {
        const fileVar = new file({
            filename:req.file.originalname,
            filepath:req.file.path,
            filetype:req.file.mimetype,
            filesize:fileSizeFormatter(req.file.size,2),
            email:req.body.email
            
        })
        await fileVar.save();
        console.log(fileVar);
        res.status(200).send("File uploaded successfully");
    }
    catch(error) {
        console.log(error);
        res.status(400).send(error.message);
    }
}

export const fetchFiles = async (req,res, next) => {

    let data = {
        email:req.body.email
    }
    console.log("request coming in: ",data);
    try {
        const files = await file.find(data);
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }
}

export const downloadFile = async (req,res, next) => {
    const id=req.params.id;
    console.log("request coming in download function: ",id);
    try {
        const files = await file.findById(id).exec();
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }
}

const fileSizeFormatter = (bytes, decimal) => {
    if(bytes === 0) {
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000,index)).toFixed(dm)) + '-' + sizes[index]
}

export const deleteFile = async (req,res,next) => {
    const id=req.params.id;
    try {
        await file.findByIdAndRemove(id).exec();
        res.send("file deleted successfully!");
    }
    catch(error) {
        console.log(error);
    }
}