const express = require("express");

const router = express.Router();

const { 
    
    registerUser, 
    getAllUsers, 
    loginUser, 
    getProfile, 
    enrollCourse,

} = require("../controllers/userController");

const { protect } = require("../middlewares/authMiddleware");

// ROUTES
router.post("/", registerUser);

router.get("/", getAllUsers);

router.post("/login", loginUser);

router.get("/profile", protect, getProfile);

router.post("/enroll", protect, enrollCourse);


module.exports = router;