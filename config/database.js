const mongosee = require("mongoose");
const db = () => {
  mongosee
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mongoDB connected");
    })
    .catch((err) => {
      console.log("oh no!!! mongoDB not connected");
    });
};

module.exports = db;
