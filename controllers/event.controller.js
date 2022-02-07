const Event = require("../Model/eventPlanner.model");
const { options } = require("../routes/event.route");
//const data = require("../data");

//let events = data;

exports.getEventController = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteEventController = async (req, res) => {
  try {
    const { eventId } = req.params;
    const deleteEvent = await Event.findByIdAndDelete(eventId);
    if (deleteEvent) {
      res.status(204).json({ msg: "Event Deleted" });
    } else {
      res.status(404).json({ msg: "Event doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
exports.singleEventController = async (req, res) => {
  try {
    const { eventId } = req.params;
    const singleEvent = await Event.findById(eventId);
    if (singleEvent) {
      res.status(201).json({ msg: "Single Event", payload: singleEvent });
    } else {
      res.status(404).json({ msg: "Event doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.updateEventController = async (req, res) => {
  try {
    const { eventId } = req.params;
    const event = req.body;
    const options = { new: true };
    const updateEvent = await Event.findByIdAndUpdate(eventId, event, options);
    res.status(200).json({ msg: "updated!", payload: updateEvent });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
