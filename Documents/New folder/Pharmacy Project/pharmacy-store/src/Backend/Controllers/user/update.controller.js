const knex = require('../../Model/index.Model')
const bcrypt = require('bcrypt')

exports.updateUserData = (req, res) => {
    console.log(req.body)
    console.log(req.params)
    if (req.body) {
        const data = {
            user_ID: req.params.user_ID,
            username: req.body.username,
            email: req.body.email,
            image_link: req.body.image_link,
            oldPassword: req.body.oldPassword,
            newPassword: req.body.newPassword
        }


        knex('user')
            .where('user_ID', data.user_ID)
            .then(result => {

                console.log(result[0].password)

                // compare old password with new password
                bcrypt.compare(req.body.oldPassword, result[0].password)
                    .then(isMatch => {
                        //if password is correct then update user data
                        if (isMatch) {
                            //update user

                            bcrypt.hash(data.newPassword, 10, function (err, hash) {
                                if (err) throw err
                                data.newPassword = hash

                                knex('user')
                                    .where({ user_ID: data.user_ID })
                                    .update({
                                        email: data.email,
                                        username: data.username,
                                        image_link: data.image_link,
                                        password: data.newPassword
                                    }, [])
                                    .then(result => {
                                        console.log(result)
                                        if (result === 1) {
                                            return res.json({
                                                success: true, message: 'update new user data completely!!'
                                            })
                                        }else{
                                            res.json({
                                                sucess: false,
                                                message: 'No result user to update!!'
                                            })
                                        }
                                    }).catch(err => console.log(err))

                            });


                        } else {
                            return res
                                .status(400)
                                .json({ success: false, message: "Password is incorrect!!" })
                        }
                    }).catch(err => console.log(err))
            })
    }

}
