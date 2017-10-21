import redis from 'redis'
import session from 'express-session'
import bluebird from 'bluebird'

const RedisStore = require('connect-redis')(session)

bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)
export const redisClient = redis.createClient()
redisClient.on('connect', () => console.log('redis is ready!'))
redisClient.on('error', err => console.log(`${err} has happened!`))

export const redisSession = session({
  store: new RedisStore({
    host: 'localhost',
    port: 6379,
    client: redisClient,
    prefix: 'session:',
    db: 0,
  }),
  secret: 'dgRsb01isFGvvfbb',
  cookie: {
    expires: '1000 * 60 * 60 * 24',
    secure: true,
  },
  resave: false,
  saveUninitialized: false,
})
