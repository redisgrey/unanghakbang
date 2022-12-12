const User = require("../models/User");

const Course = require("../models/Course");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const { protect } = require("../middlewares/authMiddleware");

const asyncHandler = require("express-async-handler");

// @desc    Add Course
// @route   POST /api/courses/add
// @access  Private

const addCourse = asyncHandler(async (req, res) => {

    const { email, password, courseName, description, price } = req.body;

    // authenticating if admin
    const user = await User.findOne({email})

    if(protect && user && (await bcrypt.compare(password, user.password)) && user.isAdmin === true){

        // Check if course exists
        const courseExists = await Course.findOne({courseName});

        if(courseExists) {

            res.status(400);

            throw new Error("Course already exists");

        }

        // Create Course
        const course = await Course.create({

            courseName,

            description,

            price

        })

        if(course) {

            res.status(201).json({
    
                _id: course.id,
    
                courseName: course.courseName,
    
                message: "Course Added!"
    
            })
    
        } else {
    
            res.status(400);
    
            throw new Error("Invalid user data")
    
        }

    } else{

        throw new Error("Not Authorized")

    }

});

// @desc    View All Course
// @route   Get /api/courses
// @access  Public
const viewAllCourses = asyncHandler(async (req, res) => {

    const Courses = await Course.find({ isActive: true }, {courseName: 1, description: 1, price: 1});

    res.status(200).json({ Courses })

});

// @desc    Deactivate Course
// @route   PUT /api/courses/deactivate
// @access  Private
const deactivateCourse = asyncHandler(async (req, res) => {

    const { email, password, courseName } = req.body;

    // authenticating if admin
    const user = await User.findOne({email})

    if(protect && user && (await bcrypt.compare(password, user.password)) && user.isAdmin === true){

        const course = await Course.updateOne({courseName: courseName}, { $set: { "isActive": false } });

        res.status(200).json(`${courseName} is deactivated!`)     

    } else{

        throw new Error("Not Authorized")

    }

});

// @desc    Reactivate Course
// @route   PUT /api/courses/reactivate
// @access  Private
const reactivateCourse = asyncHandler(async (req, res) => {

    const { email, password, courseName } = req.body;

    // authenticating if user is admin
    const user = await User.findOne({email})

    if(protect && user && (await bcrypt.compare(password, user.password)) && user.isAdmin === true){

        const course = await Course.updateOne({courseName}, { $set: { "isActive": true } });

        res.status(200).json(`${courseName} is reactivated!`)


    } else{

        throw new Error("Not Authorized")

    }

});

// @desc    Delete Course
// @route   DELETE /api/courses/delete
// @access  Private
const deleteCourse = asyncHandler(async (req, res) => {

    const { email, password, courseName } = req.body;

    // authenticating if user is admin
    const user = await User.findOne({email})

    if(protect && user && (await bcrypt.compare(password, user.password)) && user.isAdmin === true){

        const course = await Course.findOne({courseName});

        if(course){

            await Course.deleteOne({ courseName });

            res.json({ message: `${courseName} deleted from the list` })

        }else {

            res.json({ message: `${courseName} not found` })

        }

    } else{

        throw new Error("Not Authorized")

    }

});

// @desc    Edit Course Price
// @route   PUT /api/courses/pricing
// @access  Private
const priceCourse = asyncHandler(async (req, res) => {

    const { email, password, courseName, price } = req.body;

    // authenticating if user is admin
    const user = await User.findOne({email})

    if(protect && user && (await bcrypt.compare(password, user.password)) && user.isAdmin === true){

        const course = await Course.findOne({courseName});

        if(course){

            await Course.updateOne({ courseName }, {$set: { price: price }});

            res.json({ message: `${courseName}'s price has been updated` })

        }else {

            res.json({ message: `${courseName} not found` })

        }

    } else{

        throw new Error("Not Authorized")

    }

});

module.exports = {
                    addCourse,
                    viewAllCourses,
                    deactivateCourse,
                    reactivateCourse,
                    deleteCourse,
                    priceCourse,
}