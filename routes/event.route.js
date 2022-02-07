const express = require("express");
const {
  getEventController,
  deleteEventController,
  singleEventController,
  updateEventController,
} = require("../controllers/event.controller");

const router = express.Router();

router.get("/", getEventController);
//router.get("/", getSingleEventController);
router.delete("/:eventId", deleteEventController);
router.get("/:eventId", singleEventController);
router.put("/:eventId", updateEventController);

module.exports = router;
