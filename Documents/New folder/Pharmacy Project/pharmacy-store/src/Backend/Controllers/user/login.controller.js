//@desc import libraries
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");

//@desc import loginValidator
const loginValidator = require('../../validator/login')
const knex = require('../../Model/index.Model')
//@route POST request /login
//@desc login user and return JWT token
exports.login = (req, res) => {


    const key = 'secret_key_for_pharmacystore'


    //@desc validate req.body
    const { errors, isValid } = loginValidator(req.body)

    //@desc check validation
    if (!isValid) {
        return res.status(400).json(errors)
    }

    //@desc Find user by email
    knex('user').where({
        email: req.body.email
    }).select()
        .then(result => {
            //@check if user email exists
            if (result.length <= 0) {
                return res.status(404).json({
                    success: false, email: 'Email not found!!!'
                })
            }

            //@desc compare password in database with login password
            //check password
            console.log(result)
            bcrypt.compare(req.body.password, result[0].password)
                .then(isMatch => {
                    if (isMatch) {
                        //@desc if password and email matched
                        //Create JWT Payload
                        const payload = {
                            id: result[0].user_Id,
                            name: result[0].username
                        
                        }
                        //@desc Sign token
                        jwt.sign(
                            //@desc JWT Payload
                            payload,
                            //@desc secret key
                            key,
                            //@desc token life time
                            {
                                expiresIn: 31556926 //@desc 1 year in seconds
                            }
                        ,
                            (err, token) => {
                               return res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                });
                            })


                    } else {
                        return res
                            .status(400)
                            .json({ success: false, password: "Password is incorrect!!" })
                    }


                })

        })

}