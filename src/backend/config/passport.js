import passport from 'passport'
import User from '../models/user'

const LocalStrategy = require('passport-local').Strategy

passport.serializeUser((user, done) => {
  /* eslint-disable no-underscore-dangle */
  done(null, user)
  /* eslint-enable */
})

passport.deserializeUser((_id, done) => {
  User.findById(_id)
      .then(user => done(null, user))
      .catch(err => done(err, false))
})

passport.use('local.signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,
}, (req, email, password, done) => {
  User.findOne({ email })
      .then((user) => {
        if (user) {
          // json uer 객체 대신 에러 객체 전송
          return done(null, { message: 'user exists!' })
        }
        const newUser = new User({})
        newUser.email = email
        newUser.password = newUser.encryptPassword(password)
        return newUser.save()
                .then(result => done(null, result))
                .catch(e => console.log(e))
      })
      .catch(err => done(err, false))
}))

passport.use('local.signin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,
}, (req, email, password, done) => {
  User.findOne({ email })
      .then((user) => {
        if (!user) {
          // json uer 객체 대신 에러 객체 전송
          return done(null, { message: 'user doesn\'t exist!' })
        }
        if (!user.validatePassword(password)) {
          return done(null, { message: 'invalid password' })
        }
        return done(null, user)
      })
      .catch(err => done(err, false))
}))

