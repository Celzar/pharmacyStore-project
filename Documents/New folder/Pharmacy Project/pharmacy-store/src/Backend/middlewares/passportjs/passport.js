//@desc config passport js


//@import libraries
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const knex = require('../../Model/index.Model')



const opts = {};
const key = 'secret_key_for_pharmacystore'
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key

module.exports = (passport) => {
   return passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            //@desc query user if exists use bcryptjs to compare submitted password with hashed password in our database
            knex('user').where({
                user_ID: jwt_payload.sub
            }).select('id')
                .then(result => {
                    //@check if user exists
                    if (result.length > 0) {
                        return done(null, result[0])
                    }
                    console.log('test passport')
                    return done(null, false)
                }).catch(err => console.log(err))
        })
    )
}