const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/database.js");
const Auth = require("./routes/auth.js");
const Post = require("./routes/post.js");

const app = express();
app.use(cors());
dotenv.config();

//! frontend tarafından gelen verilerin işlenmesi için
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

//route  anasayfaya gelince auth içine yönlendirme
app.use("/", Auth);
app.use("/", Post);

const PORT = process.env.PORT || 5000;

app.get("/", (require, response) => {
  response.json({ message: "server is working its ok" });
});

db();
app.listen(PORT, () => {
  console.log(`hey my server started on port ${PORT}`);
});
