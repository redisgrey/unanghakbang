const User = require("../models/User");

const Course = require("../models/Course");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const { protect } = require("../middlewares/authMiddleware");

const asyncHandler = require("express-async-handler");

// @desc    Register New User
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {

    const { firstName, lastName, email, password, isAdmin, mobileNo } = req.body;

    if(!firstName || !lastName || !email || !password || !mobileNo || !isAdmin){

        res.status(400);

        throw new Error("Please add all fields");

    }

    // Check if user exists
    const userExists = await User.findOne({email});

    if(userExists) {

        res.status(400);

        throw new Error("User already exists");

    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);



    // Create User
    const user = await User.create({

        firstName,

        lastName,

        email,

        password: hashedPassword,

        mobileNo,

        isAdmin

    })

    if(user) {

        res.status(201).json({

            _id: user.id,

            email: user.email,

            token: generateToken(user._id)

        })

    } else {

        res.status(400);

        throw new Error("Invalid user data")

    }

});

// @desc    Get All Users
// @route   GET /api/users
// @access  Public
const getAllUsers = asyncHandler(async (req, res) => {

    const Users = await User.find({ isAdmin: false }, {firstName: 1, lastName: 1});

    res.status(200).json({ Users })

});


// @desc    Authenticate User
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    // check for user email
    const user = await User.findOne({email});

    if(user && (await bcrypt.compare(password, user.password))){

        res.json({

            _id: user.id,

            firstName: user.firstName,

            lastName: user.lastName,

            email: user.email,

            token: generateToken(user._id)

        })

    } else {

        res.status(400);

        throw new Error("Invalid credentials")

    }
    

    res.json({ message: "Login User" });

});

// @desc    Get profile data
// @route   GET /api/users/profile
// @access  Private
const getProfile = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({email});

    if(protect && user && (await bcrypt.compare(password, user.password))){

        res.status(200).json({

            id: user.id,
    
            firstName: user.firstName,
    
            lastName: user.lastName,
    
            email: user.email,
    
            mobileNo: user.mobileNo,
    
            isAdmin: user.isAdmin,
    
            enrollments: user.enrollments
    
        })

    } else {

        throw new Error("Invalid credentials")

    }

});

// @desc    Enroll to course
// @route   POST /api/users/enroll
// @access  Private
const enrollCourse = asyncHandler(async (req, res) => {

    const { email, password, firstName, courseName } = req.body;

    const user = await User.findOne({email});

    const course = await Course.findOne({courseName});

    if(protect && user && (await bcrypt.compare(password, user.password))){

        const enrollments = await User.findOneAndUpdate({firstName}, {$push: {"enrollments": {courseId: course.id}}});

        const enrollees = await Course.updateOne({courseName}, {$push: {"enrollees": {userId: user.id}}});

        res.status(200).json({ message: `${user.firstName} is now enrolled to ${courseName}` });

    } else {

        throw new Error("Invalid credentials")

    }

});

// Generate JWT
const generateToken = (id) => {

    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d"}) 

}



module.exports = { 
                    registerUser,
                    getAllUsers,
                    loginUser,
                    getProfile,
                    enrollCourse,
                }