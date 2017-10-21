import express from 'express'
import Celebrate from 'celebrate'

import userContorl from './controller'

const router = express.Router()
const { Joi } = Celebrate

const bodySchema = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
  }),
}

router.post('/signup', Celebrate(bodySchema), userContorl.signup)

// it will show you why request has failed
router.use(Celebrate.errors())

router.get('/me', userContorl.check)

router.get('/logout', userContorl.logout)

export default router
