import  express from "express";
import { deleteFile, downloadFile, fetchFiles, uploadFile } from "../controllers/fileController.js";
import { upload } from "../helpers/filehelper.js";

const fileRouter=express.Router();

fileRouter.post('/uploadFile',upload.single('file'),uploadFile);
fileRouter.post('/getFile',fetchFiles);
fileRouter.delete('/deleteFile/:id',deleteFile);
fileRouter.get('/downloadFile/:id',downloadFile);

export default fileRouter;