import { Router } from 'express'

import userRouter from './v1/router'

const router = Router({ mergeParams: true })

router.use('/v1/users', userRouter)

export default router
