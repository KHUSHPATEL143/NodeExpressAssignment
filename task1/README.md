# 📗 Task 1 — User Management API

A REST API built with **Express.js** to manage user data with **GET**, **POST**, and **PUT** operations using an **in-memory JSON array**.

---

## 🎯 Objective

Build a REST API that performs CRUD operations on user data:
- **GET** — Retrieve users
- **POST** — Add new users (supports bulk creation)
- **PUT** — Replace/update user data
- No database — data stored in-memory

---

## 🚀 Live API

> **Render:** [https://nodeassignment-rpwg.onrender.com/](https://nodeassignment-rpwg.onrender.com/)

## 📖 API Documentation

> **Postman:** [https://documenter.getpostman.com/view/50839203/2sBXcGDKGQ](https://documenter.getpostman.com/view/50839203/2sBXcGDKGQ)

---

## 📦 Data Structure

Each user record contains:

```json
{
  "id": 1,
  "name": "Arjun",
  "role": "student"
}
```

New users can also include an `age` field:

```json
{
  "id": 3,
  "name": "Ravi",
  "role": "student",
  "age": 22
}
```

---

## 📡 API Routes

| Method | Endpoint       | Description                        | Status Code    |
|--------|----------------|------------------------------------|----------------|
| `GET`  | `/`            | Health check — returns "working"   | `200`          |
| `GET`  | `/users`       | Get all users                      | `200`          |
| `GET`  | `/users/:id`   | Get user by ID                     | `200` / `404`  |
| `POST` | `/users`       | Add new users (bulk)               | `201`          |
| `PUT`  | `/users/:id`   | Replace a user by ID               | `200` / `404`  |

---

## 📝 Route Details

### 1. `GET /users`
Returns all user records.

**Response:** Array of all user objects.

---

### 2. `GET /users/:id`
Returns a specific user by their ID.

**Example:** `GET /users/1`

**Response (found):** User object  
**Response (not found):** `{ "message": "User not found" }` with status `404`

---

### 3. `POST /users`
Add multiple users at once. Accepts an **array** of user objects in the request body.

Uses `Array.map()` for clean data extraction. The code also demonstrates alternative approaches (commented out):
- Simple direct indexing
- `forEach()` method
- `for` loop

**Request Body:**
```json
[
  { "id": 3, "name": "Ravi", "role": "student", "age": 22 },
  { "id": 4, "name": "Sneha", "role": "mentor", "age": 30 }
]
```

**Response (201):**
```json
{
  "message": "Users created",
  "users": [...]
}
```

---

### 4. `PUT /users/:id`
Replace an entire user object by ID.

**Example:** `PUT /users/1`

**Request Body:**
```json
{
  "name": "Arjun Updated",
  "role": "mentor",
  "age": 25
}
```

**Response (200):**
```json
{
  "message": "User replaced",
  "user": { "id": 1, "name": "Arjun Updated", "role": "mentor", "age": 25 }
}
```

**Response (404):** `{ "message": "User not found" }`

---

## ⚡ Run Locally

```bash
cd task1
npm install
node index.js
```

Server starts at **http://localhost:3000**

---

## 🛠️ Tech Stack

- **Node.js** + **Express.js v5**
- `express.json()` middleware for body parsing
- In-Memory JSON Array
- No external database or libraries

---

## 💡 Learning Highlights

This task demonstrates **multiple approaches** to handling POST requests:
1. **`Array.map()`** — Clean functional approach (active)
2. **Direct indexing** — Simple but not scalable (commented)
3. **`forEach()`** — Imperative loop approach (commented)
4. **`for` loop** — Traditional approach (commented)
