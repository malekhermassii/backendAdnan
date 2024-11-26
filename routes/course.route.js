module.exports = (app)=>{
    const courses = require("../controllers/course.controller")
    app.post("/courses" , courses.createCourse)
    app.get("/allcourses" , courses.findAllCourses)
    app.get("/singleCourse/:courseId" , courses.findOneCourse)
    app.put("/updateCourse/:courseId" , courses.updateCourse)
    app.delete("/deleteCourse/:courseId" , courses.delete)
}
// controller methods  ---> endpoints
// /users -->   findAllUsers -> 
// /course ---> findOneCourse
// post ( create) , get(find) , put(update) , delete(delete)
// git :
// github : 
// git init
// git add .