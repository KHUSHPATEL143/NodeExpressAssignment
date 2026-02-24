# 📘 Assignment 1 — Student CGPA API

A REST API built with **Express.js** to manage student CGPA records using an **in-memory JSON array**.

---

## 🎯 Objective

Build a REST API that manages student academic performance records with:
- 4 Static GET routes
- 2 Dynamic GET routes
- Proper HTTP status codes
- No database — data stored in-memory

---

## 🚀 Live API

> **Render:** [https://nodeassignment-rpwg.onrender.com/](https://nodeassignment-rpwg.onrender.com/)

## 📖 API Documentation

> **Postman:** [https://documenter.getpostman.com/view/50839203/2sBXcGDKGQ](https://documenter.getpostman.com/view/50839203/2sBXcGDKGQ)

---

## 📦 Data Structure

Each student record contains:

```json
{
  "id": 1,
  "name": "Aarav Sharma",
  "branch": "CSE",
  "semester": 8,
  "cgpa": 9.3
}
```

The API is initialized with **10 student records** covering branches like CSE, IT, ECE, AI, and Data Science.

---

## 📡 API Routes

### Static Routes

| Method | Endpoint             | Description                        | Status Code |
|--------|----------------------|------------------------------------|-------------|
| `GET`  | `/students`          | Get all students                   | `200`       |
| `GET`  | `/students/topper`   | Get student with highest CGPA      | `200` / `404` |
| `GET`  | `/students/average`  | Get average CGPA of all students   | `200` / `404` |
| `GET`  | `/students/count`    | Get total number of students       | `200`       |

### Dynamic Routes

| Method | Endpoint                          | Description                        | Status Code |
|--------|-----------------------------------|------------------------------------|-------------|
| `GET`  | `/students/:id`                   | Get student by ID                  | `200` / `404` |
| `GET`  | `/students/branch/:branchName`    | Get students by branch name        | `200` / `404` |

---

## 📝 Route Details

### 1. `GET /students`
Returns all student records.

**Response:** Array of all student objects.

---

### 2. `GET /students/topper`
Returns the student with the highest CGPA using `reduce()`.

**Response:** Single student object with highest CGPA.

---

### 3. `GET /students/average`
Returns the average CGPA of all students, rounded to 2 decimal places.

**Response:**
```json
"averageCGPA: 8.51"
```

---

### 4. `GET /students/count`
Returns the total count of students.

**Response:**
```json
{
  "totalstudents": 10
}
```

---

### 5. `GET /students/:id`
Returns a specific student by their ID.

**Example:** `GET /students/3`

**Response (found):** Student object  
**Response (not found):** `{ "message": "User not found" }` with status `404`

---

### 6. `GET /students/branch/:branchName`
Returns all students from a specific branch (case-insensitive).

**Example:** `GET /students/branch/CSE`

**Response:** Array of matching student objects.

---

## ⚡ Run Locally

```bash
cd ass1
npm install
node index.js
```

Server starts at **http://localhost:3000**

---

## 🛠️ Tech Stack

- **Node.js** + **Express.js v5**
- In-Memory JSON Array
- No external database or libraries

---

## 🔗 Assignment Reference

[CGxSU Assignment 1 Instructions](https://github.com/codinggita/CGxSU_Semester_1/blob/main/backend_with_nodejs/00.assignments/01.md)
