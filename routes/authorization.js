const router = require("express").Router();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
})

const upload = multer({ storage: storage })

// Controller Imports
const AuthorizationController = require("../controllers/AuthorizationController");
const CommonController = require('../controllers/CommonController');
// Middleware Imports
const SchemaValidationMiddleware = require("../middlewares/SchemaValidationMiddleware");

// JSON Schema Imports for payload verification
const registerPayload = require("../schemas/registerPayload");
const loginPayload = require("../schemas/loginPayload");

router.get("/cities", [], CommonController.getCities);
router.get("/paymentOptions", [], CommonController.getPaymentOptions);

router.post(
    "/signup",
    [SchemaValidationMiddleware.verify(registerPayload)],
    AuthorizationController.register
);

router.post(
    "/login",
    [SchemaValidationMiddleware.verify(loginPayload)],
    AuthorizationController.login
);

router.post(
    "/username-exists",
    [],
    AuthorizationController.usernameExists
);

router.post("/image", upload.single("image"), uploadFiles);

function uploadFiles(req, res) {
    res.json({ message: "Successfully uploaded files" });
}

module.exports = router;