const { Schema, model } = require("mongoose");
//const mongooseSlugPlugin = require("mongoose-slug-plugin");

const EventSchema = new Schema({
  //organizer: { type: String, maxlength: 20, unique: true },
  // name: { type: String, required: true },
  //email: {
  // type: String,
  // trim: true,
  // lowercase: true,
  // unique: true,
  // required: "Email address is required",
  //validate: [validateEmail, "Please fill a valid email address"],
  // match: [
  //  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  //   "Please fill a valid email address",
  // ],
  // },
  // numOfSeats: { type: Number, min: 5 },
  // bookedSeats: { type: Number, default: 0, max: 5 },
  // image: { type: String, requred: true },
  // startDate: {
  //   type: Date,
  //   required: true,
  //  validate: {
  //    validator: function (v) {
  //     return (
  //       v && // check that there is a date object
  //       v.getTime() > Date.now() + 24 * 60 * 60 * 1000
  //v.getTime() < Date.now() + 90 * 24 * 60 * 60 * 1000
  //    );
  //  },
  //   message:
  //     "An event must be at least 1 day from now and not more than 90 days.",
  //  },
  // },
  // endDate: {
  //   type: Date,
  //   required: true,
  //   validate: {
  //    validator: function (e) {
  //      return (
  //       e && // check that there is a date object
  //v.getTime() > Date.now() + 24 * 60 * 60 * 1000 &&
  //       e.getTime() < Date.now() + 90 * 24 * 60 * 60 * 1000
  //    );
  //   },
  //   message:
  //     "An event must be at least 1 day from now and not more than 90 days.",
  //  },
  //  },
  // },
  // {
  //  timestamps: true,
});

//ProductSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = model("Event", EventSchema);
