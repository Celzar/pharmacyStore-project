
// const sql = require('../Model/index.Model')

// @ import libraries
const { nanoid } = require('nanoid')
const knex = require('../../Model/index.Model')
const bcrypt = require('bcrypt')


//@route POST /signup
//@desc insert new user
exports.addUser = (req, res) => {

    const signupValidator = require('../../validator/signup')
    const { errors, isValid } = signupValidator(req.body)

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }


    knex('user').where({
        'email': req.body.email
    }).then((result) => {
        //@desc Check if email already exists
        if (result.length > 0) {
            return res.status(400).json({ success: false, email: 'Email already exists' })
        } else {
            let randomID = nanoid(5) + new Date().getSeconds() + new Date().getMilliseconds() + nanoid(5) //string length === 15
            
            //@desc check random duplicate user_ID 
            knex('user').where({
                'user_ID': randomID
            }).then((result) => {

                //@desc if user id already exists response error
                if (result.length > 0) {
                    console.log(result)
                    return res.status(400).json({ success: false, message: 'something went wrong!!!. Please Try Again' })
                }

                else {
                    //@desc set user data to object for hashing password 
                    let newUser = {
                        user_ID: randomID,
                        username: req.body.username,
                        email: req.body.email,
                        password: req.body.password,
                        role: 'user'
                    }

                    //@desc hash password before saving in database
                    bcrypt.hash(newUser.password, 10, (err, hash) => {
                        if (err) throw err
                        newUser.password = hash

                        //@desc insert new user after hashing password
                        knex('user').insert({
                            user_ID: newUser.user_ID,
                            username: newUser.username,
                            email: newUser.email,
                            password: newUser.password,
                            role: 'user'
                        }).then(result => {
                            return res.json({ success: true, message: 'Add new user completed' })
                        }).catch((err) => console.err(err))

                    })
                }


            }).catch((err) => console.log(err))
        }
    }).catch((err) => {
        console.log(err)
    })

}
