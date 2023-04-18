const express = require("express");
const authController = require("../../controllers/auth");
const { controllerWrapper } = require("../../services");
const { userAuthMiddleware } = require("../../middlewares");

const router = express.Router();

router.post("/register", controllerWrapper(authController.signUp));

router.post("/login", controllerWrapper(authController.signIn));

router.get(
  "/current",
  userAuthMiddleware,
  controllerWrapper(authController.getCurrent)
);

router.post(
  "/logout",
  userAuthMiddleware,
  controllerWrapper(authController.logout)
);

router.patch(
  "/:id",
  userAuthMiddleware,
  controllerWrapper(authController.updateUserSubscription)
);

module.exports = router;
