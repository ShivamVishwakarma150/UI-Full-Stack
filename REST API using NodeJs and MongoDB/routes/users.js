const ex = require("express");

const User = require("../models/user")
const router = ex.Router();


// creating the routes

// get all the users

router.get('/getusers', async (request , response) => {
    try {
        let users= await User.find();
        response.status(200).json(users);
    }
    catch (err) {
        console.error(err);
        response.status(500).json({
            msg : err.message
        });
    }
});


/*
    USAGE : Create a Product
    URL : http://127.0.0.1:2000/registeruser
    Method : POST
    Fields : userId , userName, password, age, mobile, subscribed
 */
    router.post('/registeruser', async (request , response) => {
        try {
            let newUser = {
                userId: request.body.userId,
                userName : request.body.userName,
                password : request.body.password ,
                age: request.body.age,
                mobile : request.body.mobile,
                subscribed : request.body.subscribed
            };
            // user is Exists or not
            let user = await User.findOne({userId : newUser.userId});
            if(user){
                return response.status(401).json({
                    msg : 'User is Already Exists'
                })
            }
            user = new User(newUser);
            user = await user.save(); // insert the user to database
            response.status(200).json({
                result : 'User is inserted',
                user : user
            });
        }
        catch (err) {
            console.error(err);
            response.status(500).json({
                msg : err.message
            });
        }
    });

module.exports=router;


