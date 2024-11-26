// course (title , description , price , rating  , instructor )
const mongoose = require('mongoose')
// schema 
const CourseSchema  = new mongoose.Schema({
    title : {
        type : String , 
        required : true
    } , 
    desc : {
        type : String , 
        required : true
    },
    price : {
        type : String , 
        required : true
    },
    rating: {
        type : String , 
        required : true
    },
    instructor:{
        type : String , 
        required : true
    }
})
module.exports = mongoose.model("Course" , CourseSchema)