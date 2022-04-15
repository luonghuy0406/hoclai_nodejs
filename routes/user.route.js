import express from "express"
import { create, index, postCreate, search, viewUser } from "../controller/user.controller.js"
var router = express.Router() 




router.get('/', index)

router.get('/search', search)

router.get('/userCreate',create)

router.post('/userCreate',postCreate)
router.get('/:id', viewUser)

export default router