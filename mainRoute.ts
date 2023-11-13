import express from 'express';
import helmet from 'helmet'
import { home, projects } from './controllers/data.controllers'



const router=express.Router()
router.use(helmet())
router.get('/',home)
router.get('/:slug',projects)

  
    




export default router;