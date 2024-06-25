const express = require("express");
const app = express();
require("dotenv").config();
require("./dbConnect");
const userRoute = require("./routes/userRoutes");
const postRoute = require("./routes/postRoutes");
const commentRoute = require("./routes/commentRoutes");
const likeRoute = require("./routes/likeRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my blogging application." });
});
const PORT = process.env.PORT || 8080;
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);
app.use("/api/likes", likeRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
