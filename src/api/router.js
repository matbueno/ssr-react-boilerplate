import { Router } from 'express'

import userRouter from './user/api/router'

const router = Router()

router.use('', userRouter)

export default router
