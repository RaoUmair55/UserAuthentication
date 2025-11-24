import express from 'express'
import { login, singup, verifyOtp } from '../controllers/user.controller.js'
import { validateLogin, validateSignup } from '../middelwears/validate.controller.js'

const router = express.Router()

router.post('/register',  validateSignup, singup)
router.post('/login', validateLogin, login)
router.post('/verify-otp', verifyOtp)

export default router