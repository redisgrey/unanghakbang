const express = require("express");

const router = express.Router();

const { 

    addCourse, 
    viewAllCourses, 
    deactivateCourse, 
    reactivateCourse, 
    deleteCourse, 
    priceCourse, 
    
} = require("../controllers/courseController");

const { protect } = require("../middlewares/authMiddleware");

// ROUTES
router.post("/add", protect, addCourse);

router.get("/", viewAllCourses);

router.put("/deactivate", protect, deactivateCourse);

router.put("/reactivate", protect, reactivateCourse);

router.delete("/delete", protect, deleteCourse);

router.put("/pricing", protect, priceCourse);

module.exports = router;