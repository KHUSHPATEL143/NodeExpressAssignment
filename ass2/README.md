# Product API (Assignment 2)

A simple RESTful API built with Node.js and Express to manage a store's products. It uses an in-memory array to store product data.

## Prerequisites

- Node.js installed

## Installation

1. Navigate to the project directory:
   ```bash
   cd d:/CG/NODE/assignment/ass2
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Server

Start the server using Node:
```bash
node index.js
```
The server will start on `http://localhost:3000`.

## API Endpoints

### 1. Base Welcome Route
- **Method:** `GET`
- **Endpoint:** `/`
- **Description:** Returns a server status message.

### 2. Get All Products
- **Method:** `GET`
- **Endpoint:** `/products`
- **Description:** Retrieves a list of all products.

### 3. Get Product by ID
- **Method:** `GET`
- **Endpoint:** `/products/:id`
- **Description:** Retrieves a specific product by its ID.

### 4. Get Products by Category
- **Method:** `GET`
- **Endpoint:** `/products/category/:categoryName`
- **Description:** Retrieves a list of products that belong to a specific category.

### 5. Create a New Product
- **Method:** `POST`
- **Endpoint:** `/products`
- **Description:** Adds a new product to the list.
- **Request Body:**
  ```json
  {
    "name": "Product Name",
    "category": "Category",
    "price": 100,
    "stock": 50,
    "rating": 4.5
  }
  ```

### 6. Update Product Details
- **Method:** `PUT`
- **Endpoint:** `/products/:id`
- **Description:** Completely updates a specific product's details.

### 7. Update Product Stock
- **Method:** `PUT`
- **Endpoint:** `/products/:id/stock`
- **Description:** Updates the stock value of a specific product.
- **Request Body:**
  ```json
  {
    "stock": 100
  }
  ```

### 8. Update Product Price
- **Method:** `PUT`
- **Endpoint:** `/products/:id/price`
- **Description:** Updates the price of a specific product.
- **Request Body:**
  ```json
  {
    "price": 999
  }
  ```

## Dependencies
- express
- cors
