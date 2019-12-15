const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/users");
const taskRouter = require("./routers/tasks");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
app.use(cors());

app.listen(port, () => {
  console.log("server is up on port " + port);
});


// const Task = require("./models/task");
// const USer = require("./models/user");

// const main = async () => {
//   const task = await Task.findById("5df1f41fd0a647250bbf3872");
//   await task.populate("owner").execPopulate();
//   console.log(task.owner);

//   const user = await USer.findById("5df1f3143a258723d9a78b22");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };

/* const pet = {
  name: "Kitty"
};

pet.toJSON = function() {
  console.log(this);
  return {};
};

console.log(JSON.stringify(pet)); */

/* app.use((req, res, next) => {
  if (req.method === "GET") {
    res.send("disaled");
  } else {
    next();
  }
}); */

/* app.use((req, res, next) => {
  res.send("The Site is updating, please be pacient");
}); */

/* const jwt = require("jsonwebtoken");

const myFunction = async () => {
  const authTokken = jwt.sign({ _id: "abc123" }, "thisIsMyNewCourse", {
    expiresIn: "7 days"
  });
  console.log(authTokken);
  const data = jwt.verify(authTokken, "thisIsMyNewCourse");
  console.log(data);
};
myFunction();
 */
//old way

/*   user
    .save()
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(400).send(err);
    }); */

/*   User.findById(_id)
    .then(user => {
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    })
    .catch(err => {
      res.status(500).send(err);
    }); */

/*   User.find({})
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send();
    }); */

/*  const task = new Task(req.body);
  task
    .save()
    .then(task => {
      res.status(201).send(task);
    })
    .catch(err => {
      res.status(400).send(err);
    }); */

/* Task.find({})
    .then(tasks => {
      res.send(tasks);
    })
    .catch(err => {
      res.status(500).send(err);
    }); */
/*   const _id = req.params.id;
  console.log(_id);
  Task.findById(_id)
    .then(task => {
      if (!task) {
        res.status(404).send();
      }
      res.send(task);
    })
    .catch(err => {
      res.status(500).send(err);
    }); */
