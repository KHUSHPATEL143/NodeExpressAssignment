const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("server");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});

const students = [
    {
        id: 1,
        name: "Aarav Sharma",
        branch: "CSE",
        semester: 8,
        cgpa: 9.3
    },
    {
        id: 2,
        name: "Ishita Verma",
        branch: "IT",
        semester: 7,
        cgpa: 8.9
    },
    {
        id: 3,
        name: "Rohan Kulkarni",
        branch: "ECE",
        semester: 6,
        cgpa: 8.4
    },
    {
        id: 4,
        name: "Meera Iyer",
        branch: "CSE",
        semester: 8,
        cgpa: 9.1
    },
    {
        id: 5,
        name: "Kunal Deshmukh",
        branch: "IT",
        semester: 5,
        cgpa: 7.8
    },
    {
        id: 6,
        name: "Ananya Reddy",
        branch: "CSE",
        semester: 6,
        cgpa: 8.7
    },
    {
        id: 7,
        name: "Vikram Patil",
        branch: "ECE",
        semester: 7,
        cgpa: 8.2
    },
    {
        id: 8,
        name: "Priyanka Nair",
        branch: "AI",
        semester: 4,
        cgpa: 8.8
    },
    {
        id: 9,
        name: "Harsh Mehta",
        branch: "Data Science",
        semester: 5,
        cgpa: 8.0
    },
    {
        id: 10,
        name: "Neha Gupta",
        branch: "CSE",
        semester: 6,
        cgpa: 7.9
    }
];

// /students

app.get("/students", (req, res) => {

    if (students.length == 0) {
        return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(students);
    console.log(...students);

});


// students/topper

app.get("/students/topper", (req, res) => {

    if (students.length == 0) {
        return res.status(404).json({ message: "User not found" });
    }

    const topStudent = students.reduce((acc, curr) => {
        return curr.cgpa >= acc ? curr : acc;

    }, 0);

    res.status(200).json(topStudent);

});


// students/average

app.get("/students/average", (req, res) => {

    if (students.length == 0) {
        return res.status(404).json({ message: "User not found" });
    }

    const avg = students.reduce((acc, curr) => {
        const total = (acc + curr.cgpa);
        return total;
    }, 0);

    const formattedAvg = Number((avg / students.length).toFixed(2));

    res.status(200).json("averageCGPA: " + formattedAvg);

});


// students/count

app.get("/students/count", (req, res) => {
    res.status(200).json({
        totalstudents: students.length
    })
})



// students/:id

app.get("/students/:id", (req, res) => {
    console.log("this is req: ", req.params);

    const userId = Number(req.params.id);

    const user = students.find(u => u.id == userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
});


// students/branch/:branchName  


app.get("/students/branch/:branchName", (req, res) => {

    const branchName = req.params.branchName.toUpperCase();


    const filteredStudents = students.filter(student =>
        student.branch.toUpperCase() === branchName
    );

    if (!filteredStudents) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(filteredStudents);


});