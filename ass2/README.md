# 📘 Assignment 2 — Product API

A RESTful API built with **Express.js** to manage a store's products using an **in-memory JSON array**.

---

## 🎯 Objective

Build a REST API that manages product records with:
- 4 GET routes (static & dynamic)
- 1 POST route to add products
- 3 PUT routes to update product details, stock, and price
- Proper HTTP status codes
- No database — data stored in-memory

---

## 🚀 Live API

> **Render:** [https://nodeexpressassignment-2.onrender.com/](https://nodeexpressassignment-2.onrender.com/)

## 📖 API Documentation

> **Postman:** [https://documenter.getpostman.com/view/50839203/2sBXcHgdS1](https://documenter.getpostman.com/view/50839203/2sBXcHgdS1)

---

## 📦 Data Structure

Each product record contains:

```json
{
  "id": 1,
  "name": "Wireless Mouse",
  "category": "Electronics",
  "price": 799,
  "stock": 25,
  "rating": 4.3
}
```

The API is initialized with **5 product records** covering categories like Electronics, Footwear, Accessories, and Fashion.

---

## 📡 API Routes

### Product Routes

| Method | Endpoint                              | Description                        | Status Code |
|--------|---------------------------------------|------------------------------------|-------------|
| `GET`  | `/`                                   | Base server welcome route          | `200`       |
| `GET`  | `/products`                           | Get all products                   | `200`       |
| `GET`  | `/products/:id`                       | Get product by ID                  | `200` / `404` |
| `GET`  | `/products/category/:categoryName`    | Get products by category name      | `200`       |
| `POST` | `/products`                           | Create a new product               | `201`       |
| `PUT`  | `/products/:id`                       | Replace an entire product          | `200` / `404` |
| `PUT`  | `/products/:id/stock`                 | Update stock for a product         | `200` / `400` / `404` |
| `PUT`  | `/products/:id/price`                 | Update price for a product         | `200` / `400` / `404` |

---

## 📝 Route Details

### 1. `GET /products`
Returns all product records.

**Response:** Array of all product objects.

---

### 2. `GET /products/:id`
Returns a specific product by its ID.

**Example:** `GET /products/3`

**Response (found):** Product object  
**Response (not found):** `{ "message": "User not found" }` with status `404` (Note: The API code returns "User not found" here instead of "Product not found")

---

### 3. `GET /products/category/:categoryName`
Returns all products from a specific category (case-insensitive).

**Example:** `GET /products/category/Electronics`

**Response:** Array of matching product objects.

---

### 4. `POST /products`
Adds a new product to the list. ID is auto-generated.

**Request Body:**
```json
{
  "name": "Keyboard",
  "category": "Electronics",
  "price": 1299,
  "stock": 10,
  "rating": 4.5
}
```

**Response:** Product creation confirmation message along with the new object.

---

### 5. `PUT /products/:id`
Replaces the entire product details based on ID.

**Response (found):** The fully updated product object.
**Response (not found):** `{ "message": "Product not found" }` with status `404`

---

### 6. `PUT /products/:id/stock`
Updates only the `stock` property of a specific product.

**Request Body:**
```json
{
  "stock": 100
}
```

**Response (found):** The updated product object.

---

### 7. `PUT /products/:id/price`
Updates only the `price` property of a specific product.

**Request Body:**
```json
{
  "price": 899
}
```

**Response (found):** The updated product object.

---

## ⚡ Run Locally

```bash
cd ass2
npm install
node index.js
```

Server starts at **http://localhost:3000**

---

## 🛠️ Tech Stack

- **Node.js** + **Express.js v5**
- **CORS** middleware enabled
- In-Memory JSON Array
- No external database or libraries

---

## 🔗 Assignment Reference

[CGxSU Assignment 2 Instructions](https://github.com/codinggita/CGxSU_Semester_1/blob/main/backend_with_nodejs/00.assignments/02.md)
