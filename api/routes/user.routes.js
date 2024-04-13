import express from "express"
import {
  loginUser,
  getProfile,
  buyOrder,
  sellOrder,
  getCurrentHoldings,
} from "../controllers/user.controllers.js"

const router = express.Router()

router.route("/user/login").get(loginUser)
router.route("/user/profile").get(getProfile)

router.route("/user/place-buy-order").post(buyOrder)
router.route("/user/sell-order").post(sellOrder)
router.route("/user/current-holdings").get(getCurrentHoldings)

export default router
