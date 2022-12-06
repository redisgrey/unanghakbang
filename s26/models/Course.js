const mongoose = require("mongoose");

// * Creation of Schema

const courseSchema = new mongoose.Schema({

    courseName: {

        type: String,

        required: [true, "Course Name is Required"]

    },

    description: {

        type: String,

        required: [true, "Course Description is Required"]

    },

    price: {

        type: Number,

        required: [true, "Course Price is Required"]

    },

    isActive: {

        type: Boolean,

        default: true

    },

    createdOn: {

        type: Date,

        default: new Date()

    },
    
    enrollees: [

        {
            userId: {

                type: String,

                required: [true, "User ID is required"]

            },

            enrolledOn: {

                type: Date,

                default: new Date()

            },

        }
    ]

});

module.exports = mongoose.model("Course", courseSchema);