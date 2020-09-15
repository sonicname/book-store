const express = require("express");
const router = express.Router();
const bookController = require("../controller/book.controlller");

router.get("/", bookController.index);
router.get("/:id", bookController.findBookById);
router.post("/create", bookController.createBook);
router.post("/update/:id", bookController.findBookAndUpdate);
router.get("/delete/:id", bookController.deleteBook);

module.exports = router;
