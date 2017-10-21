import passport from 'passport'
import { redisClient } from '../../config/redis'

const userControl = {
  signup: (req, res, next) => {
    passport.authenticate('local.signup', (err, result) => {
      if (err) {
        res.status(500).json(err)
      }
      // Joi validation error
      if (result.statusCode === 400) {
        return res.status(400).json({ message: '잘못된 요청입니다.' })
      }
      req.logIn(result, (err) => {
        if (err) { return next(err) }
        return res.json(result)
      })
    })(req, res, next)
  },
  check: (req, res) => {
    redisClient.keysAsync('*')
    .then((keys) => {
      if (!keys.length) {
        return res.json({ message: '세션이 존재하지 않습니다.' })
      }
      return redisClient.getAsync(keys.slice(-1))
      .then((session) => {
        const email = JSON.parse(session).passport.user.email
        return res.json({ email })
      })
    })
  },
  logout: (req, res) => {
    redisClient.keysAsync('*')
    .then((keys) => {
      if (!keys.length) {
        return res.json({ message: '세션이 존재하지 않습니다.' })
      }
      return redisClient.delAsync(keys.slice(-1))
      .then(() => res.json({}))
    })
  },
}

export default userControl

