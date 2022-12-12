const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    firstName: {

        type: String,

        required: [true, "Please input your first name"]

    },

    lastName: {

        type: String,

        required: [true, "Please input your last name"]

    },

    email: {

        type: String,

        required: [true, "Please input your email address"],

        unique: true

    },

    password: {

        type: String,

        required: [true, "Please input your password"]

    },

    isAdmin: {

        type: Boolean,

        default: true

    },

    mobileNo: {

        type: String,

        required: [true, "Please input your mobile number"]

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

})

module.exports = mongoose.model("User", userSchema);