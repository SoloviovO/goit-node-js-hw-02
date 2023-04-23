const { getCurrent } = require("./getCurrent");
const { logout } = require("./logout");
const { signIn } = require("./sign-in");
const { signUp } = require("./sign-up");
const { updateAvatar } = require("./update-avatar");
const { updateUserSubscription } = require("./updateUserSubscription");

module.exports = {
  signUp,
  signIn,
  logout,
  updateUserSubscription,
  getCurrent,
  updateAvatar,
};
