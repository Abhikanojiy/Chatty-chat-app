const express=require("express")
const router=express.Router()
const {registerUser,authUser,allUsers,changePic}=require('../controllers/userControllers')
const { protect } = require("../middlewares/authMiddleware")


router.route('/').post(registerUser).get(protect,allUsers)
router.route('/login').post(authUser)
router.route('/updatePic').put(protect,changePic)

module.exports=router