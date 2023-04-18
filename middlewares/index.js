const { errorHandlingMiddleware } = require("./error-handling.middleware");
const { userAuthMiddleware } = require("./user-auth.middlewares");

module.exports = {
  userAuthMiddleware,
  errorHandlingMiddleware,
};
