const mongoose = require("mongoose");
// const validator = require("validator");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// const Task1 = new Tasks({
//   description: "A new one!",
//   completed: true,
// });
// Task1.save()
//   .then((Task) => {
//     console.log(Task);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
