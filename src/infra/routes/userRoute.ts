import { createUserController } from '@useCases/CreateUser'
import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  return res.json({ api: 'ok' })
})

router.post('/', (req, res) => {
  return createUserController.handle(req, res)
})

export default router
