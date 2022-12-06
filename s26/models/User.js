const mongoose = require("mongoose");

// * Creation of Schema
const userSchema = new mongoose.Schema({

    firstName: {

        type: String,

        required: [true, "First Name is Required"]

    },

    lastName: {

        type: String,

        required: [true, "Last Name is Required"]

    },

    email: {

        type: String,

        required: [true, "Email Address is Required"]

    },

    password: {

        type: String,

        required: [true, "Password is required"]

    },

    isAdmin: {

        type: Boolean,

        default: false

    },

    mobileNumber: {

        type: String,

        required: [true, "Mobile Number is Required"]

    },

    enrollments: [

        {
            courseId: {

                type: String,

                required: [true, "Course ID is required"]

            },

            enrolledOn: {

                type: Date,

                default: new Date()

            },

            status: {

                type: String,

                default: "Enrolled"

            }

        }

    ]

});

module.exports = mongoose.model("User", userSchema);