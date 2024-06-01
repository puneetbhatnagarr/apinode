const blogModel = require('../models/blog.js')
class Blogcontroller{
    static getall = async(req,res)=>{
        try{
           
            res.setHeader("Access-Control-Allow-Origin","*")
           
            const getall = await blogModel.find()
            res.status(200).json({
                success:true,
                getall
            })
            res.send(getall)
        }catch(err){
            console.log(err);
        }
    }
    static bloginsert = async(req,res)=>{
       
        try{
            res.setHeader('Access-Control-Allow-Origin','*');
            // const file = req.files.pimages;
            // console.log(file)
            // const myimage = await cloudinary.uploader.upload(file.tempFilePath,{
            //   folder:'user_profile',
            //   width:150,
            // })
            // console.log(myimage)
            const insertblog = await blogModel.create(req.body);
            console.log(req.body)
            res.status(200).json({
             message:"Successfully Registered",
             success:true,
             insertblog 
            })
         }catch(err){
             console.log(err)
         }
    }
    static blogview=async(req,res)=>{
        try{
            res.setHeader("Access-Control-Allow-Origin","*");
            const viewresult = await blogModel.findById(req.params.id)
            res.status(200).json({
               
                success:true,
                viewresult 
            })
        }catch(err){
            console.log(err)
        }
    }
    static updateblogs = async(req,res)=>{
        try{
            res.setHeader('Access-Control-Allow-Origin','*');
            const updatedata = await blogModel.findByIdAndUpdate(req.params.id,req.body);
            if(!updatedata){
                return res.status(500).json({
                    success:false,
                    message:"data not found"
                })
            }
            res.status(200).json({
                success:true,
                updatedata
              })
            res.send(updatedata)
        }catch(err){
            console.log(err)
        }
    }
    static blogdelete=async(req,res)=>{
        try{
            res.setHeader("Access-Control-Allow-Origin","*");
            const deleteresult = await blogModel.findByIdAndDelete(req.params.id)
            res.status(200).json({
                success:true,
                deleteresult
            })
        }catch(err){
            console.log(err)
        }
}
}
module.exports = Blogcontroller