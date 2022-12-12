const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

    courseName: {

        type: String,

        required: [true, "Please input the course name"]

    },

    description: {

        type: String,

        required: [true, "Please input the course description"]

    },

    price: {

        type: Number,

        required: [true, "Please input the course price"]

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

            }

        }

    ]

})

module.exports = mongoose.model("Course", courseSchema);