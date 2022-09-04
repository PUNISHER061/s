const mongoose = require("mongoose");
const config = require("./config");

mongoose.connect("mongodb+srv://arsama705:siktirarsam7841@cluster0.og16vas.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("[✅ DataBase] Connected!");
});
module.exports = mongoose;
