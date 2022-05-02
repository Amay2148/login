const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors")


app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
      origin: "http://localhost:3000",
      credentials: 'include',

  })
)

//routers
const userRoutes = require("./routes/User.js");
app.use("/user", userRoutes);

//static Images Folder

app.use("/Images", express.static("./Images"));

app.get("/logout", (req, res) => {
 return res.status(200).json({
      msg: "logout succesfully"
  });

})

//server
app.listen(process.env.PORT || 8000, () => {
  console.log(`App Started on PORT ${process.env.PORT || 8000}`);
});
