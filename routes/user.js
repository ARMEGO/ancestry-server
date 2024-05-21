const router = require("express").Router();

// Middleware Imports
const isAuthenticatedMiddleware = require("../middlewares/IsAuthenticatedMiddleware");
const SchemaValidationMiddleware = require("../middlewares/SchemaValidationMiddleware");
const CheckPermissionMiddleware = require("../middlewares/CheckPermissionMiddleware");

// Controller Imports
const UserController = require("../controllers/UserController");

// JSON Schema Imports for payload verification
const updateUserPayload = require("../schemas/updateUserPayload");

const { roles } = require("../config");

router.get("/", [isAuthenticatedMiddleware.check], UserController.getUser);

router.patch(
    "/",
    [
        isAuthenticatedMiddleware.check,
        SchemaValidationMiddleware.verify(updateUserPayload),
    ],
    UserController.updateUser
);

router.get(
    "/all",
    [isAuthenticatedMiddleware.check, CheckPermissionMiddleware.has(roles.ADMIN)],
    UserController.getAllUsers
);

module.exports = router;