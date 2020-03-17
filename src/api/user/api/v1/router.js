import { Router } from 'express'

import { auth } from '_middlewares'
import { userCreate, userLogin, userGet } from './controller'

const router = Router()

router.post('/sign-up', userCreate)

router.post('/login', userLogin)

router.get('/', auth, userGet)

export default router
