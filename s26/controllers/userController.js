// import the models

const User = require("../models/User");

const Course = require("../models/Course");

const bcrypt = require("bcrypt");
const { model, trusted } = require("mongoose");

module.exports.checkEmail = (reqBody) => {
    const {email} = reqBody;

    return User.findOne({ email:email }).then((result, error) => {
        if(result != null){

            return "Email already exists"
        } else {
            if(result === null){

                return true

            } else {

                return error
            }
        }
        
    })

}

module.exports.register = (reqBody) => {

    let newUser = new User({

        firstName: reqBody.firstName,
        lastName: reqBody.lastName,
        email: reqBody.email,
        password: bcrypt.hashSync(reqBody.password, 10),
        mobileNumber: reqBody.mobileNumber

    });

    // save()
    return newUser.save().then((result,error) => {

        if(result){

            return true

        }else{

            return error
        }
    })

}

module.exports.getAllUsers = () => {

    return User.find().then((result,error) => {

        if(result){

            return true

        } else{

            return error

        }

    })
}

module.exports.login = (reqBody) => {

    const { email, password } = reqBody;

    return User.findOne({ email: email}).then((result, error) => {

        if(result === null) {

            return false

        }else {
            // what if we found an existing email but password does not match
            let isPasswordCorrect = bcrypt.compareSync(password, result.password);

            if(isPasswordCorrect === true){

                return `Access Token`

            }else {

                return false

            }

        }

    })

}

module.exports.getProfile = (data) => {

    const {id} = data;

    return User.findById(id).then((result,error) => {

        if (result !== null){

            result.password = "";

            return result

        } else{

            return false

        }

    })
}

module.exports.enroll = async (data) => {

    const {userId, courseId} = data;

    // to look for matching documents of the user
    const userEnroll = await User.findById(userId).then((result,error) => {

        if(error){

            return error

        }else {

            result.enrollments.push({courseId: courseId})

            return result.save().then(result => {

                return true

            })
        }
    })

    // look for matching courses
    const courseEnroll = await Course.findById(courseId).then((result,error) => {

        if(error){

            return error

        } else {

            result.enrollees.push({ userId: userId })

            return result.save().then(result => {

                return true

            })
        }
    })

    // return only one value for the fuction
    if(userEnroll && courseEnroll) {

        return true

    } else{

        return false

    }
}
