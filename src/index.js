const express = require("express");
const nodeMailer = require("nodemailer");
require("./db/mongoose");
// const User = require("./models/user")
// const Task = require("./models/task");
const userRouter = require("./routers/user.js");
const taskRouter = require("./routers/task.js");
const bcrypt = require("bcryptjs");

const app = express();
const port = process.env.PORT;

// Middlewares
// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET requests are disabled !");
//   } else {
//     next();
//   }
// });
// app.use((req, res, next) => {
//   // res.status(503).send(`Under maintainance`);
//   next();
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});

// const jwt = require("jsonwebtoken");

// const User = require("./models/user.js");

// const exFunction = async function () {
//   // const task = await Task.findById("60787284d7432d4a88092fc2");
//   // await task.populate("owner").execPopulate();
//   // console.log(task.owner);
//   // const token = jwt.sign({ _id: "infy@123" }, "thenewone");
//   // console.log(token);
//   // const data = jwt.verify(token, "thenewone");
//   // console.log(data);
//   //   const passward = "infy@123";
//   //   const hashed = await bcrypt.hash(passward, 8);
//   //   console.log(passward);
//   //   console.log(hashed);
//   const user = await User.findById("60771d90d97c31248866919b");
//   await user.populate("tasks").execPopulate();
//   // console.log(user.tasks);
// };
// exFunction();

// const multer = require("multer");
// const upload = multer({
//   dest: "images",
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error("Please upload a word doc !"));
//     }
//     cb(undefined, true);
//     // cb(new Error('Please upload an image'))
//   },
// });
// app.post(
//   "/upload",
//   upload.single("upload"),
//   (req, res) => {
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );
