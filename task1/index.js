const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("working");
});

const users = [
  { id: 1, name: "Arjun", role: "student"  },
  { id: 2, name: "Priyesha", role: "mentor" }
];

app.get("/users", (req, res) => {
  res.status(200).json(users);
});


app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});




// app.post("/users", (req, res) => {

//   const newUser = {
//     id: req.body.id,
//     name: req.body.name,
//     role: req.body.role,
//     age: req.body.age
//   };

//   users.push(newUser);


 // =======================================  simple methods =======================================

//   const user1 = {
//     id: req.body[0].id,
//     name: req.body[0].name,
//     role: req.body[0].role
//   }
//   console.log("user1: ",user1);
//   users.push(user1);


//   const user2 = {
//     id: req.body[1].id,
//     name: req.body[1].name,
//     role: req.body[1].role
//   }
//   console.log("user2: ",user2);
//   users.push(user2);

//   const user3 = {
//     id: req.body[2].id,
//     name: req.body[2].name,
//     role: req.body[2].role
//   }
//   console.log("user3: ",user3);
//   users.push(user3);

//   res.status(201).json({
//     message: "User created",
//     user: newUser
//   });

// });





// ======================================  using map()  ===========================================


app.post("/users", (req, res) => {

console.log(req);

  const newUsers = req.body.map((item) => ({
    id: item.id,
    name: item.name,
    role: item.role,
    age: item.age
  }));

  users.push(...newUsers);

  res.status(201).json({
    message: "Users created",
    users: newUsers
  });
});





// ======================================= using  forEach()  ======================================= 



// app.post("/users", (req, res) => {

//   const newUsers = [];

//   req.body.forEach((item) => {
//     const user = {
//       id: item.id,
//       name: item.name,
//       role: item.role,
//       age: item.age
//     };

//     users.push(user);
//     newUsers.push(user);
//   });

//   res.status(201).json({
//     message: "Users created",
//     users: newUsers
//   });
// });


//=================================== using for loop ==============================================



// app.post("/users", (req, res) => {

//   const newUsers = [];

//   for (let i = 0; i < req.body.length; i++) {
//     const item = req.body[i];

//     const user = {
//       id: item.id,
//       name: item.name,
//       role: item.role,
//       age: item.age
//     };

//     users.push(user);
//     newUsers.push(user);
//   }

//   res.status(201).json({
//     message: "Users created",
//     users: newUsers
//   });
// });




// edit put request


app.put("/users/:id", (req, res) => {

  console.log("body: ",req.body);
  console.log("parems: ",req.params);


  const userId = Number(req.params.id);
  const index = users.findIndex(u => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = {
    id: userId,
    name: req.body.name,
    role: req.body.role,
    age: req.body.age
  };

  res.status(200).json({
    message: "User replaced",
    user: users[index]
  });
});



app.listen(3000, () => {
  console.log("Server started on port 3000");
});