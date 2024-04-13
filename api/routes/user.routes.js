import express from "express"
import {
  loginUser,
  getProfile,
  buyOrder,
  sellOrder,
  getCurrentHoldings,
} from "../controllers/user.controllers.js"

const router = express.Router()

router.route("/login").get(loginUser)
router.route("/profile").get(getProfile)

router.route("/place-buy-order").post(buyOrder)
router.route("/sell-order").post(sellOrder)
router.route("/current-holdings").get(getCurrentHoldings)
