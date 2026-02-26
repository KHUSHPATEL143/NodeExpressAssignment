const express = require("express"); 
const cors = require('cors')

const app = express(); 
app.use(cors()); 

app.use(express.json());


const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    stock: 25,
    rating: 4.3
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    stock: 40,
    rating: 4.5
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Accessories",
    price: 999,
    stock: 30,
    rating: 4.2
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    stock: 12,
    rating: 4.4
  },
  {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1599,
    stock: 50,
    rating: 4.1
  }
];

app.get("/", (req, res) => {
  res.send("Server is working");
});



//     GET /products  

app.get("/products", (req, res) => {   
  res.status(200).json(products);      
});


//     GET /products/:id  


app.get("/products/:id", (req, res) => {

  console.log("this is req: ", req.params);

  const userId = req.params.id;

  const user = products.find(u => u.id == userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});



//     GET /products/category/:categoryName   


app.get("/products/category/:categoryName", (req, res) => {

  const categoryName = req.params.categoryName.toLowerCase();

  const filteredproducts = products.filter(product =>
       product.category.toLowerCase() === categoryName
  );

  res.status(200).json(filteredproducts);


});



//     POST /products    

app.post("/products", (req, res) => {

  const newProduct = {
    id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product created",
    product: newProduct
  });
});

//   PUT /products/:id 
app.put("/products/:id", (req, res) => {

  const productId = parseInt(req.params.id);

  const index = products.findIndex(p => p.id === productId);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  const updatedProduct = {
    id: productId,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating
  };

  products[index] = updatedProduct;

  res.status(200).json(updatedProduct);

});


//      PUT /products/:id/stock 


app.put("/products/:id/stock", (req, res) => {

  const productId = parseInt(req.params.id);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  if (req.body.stock === undefined) {
    return res.status(400).json({ message: "Stock value is required" });
  }


  product.stock = req.body.stock;

  res.status(200).json(product);

});


//     /products/:id/price   


app.put("/products/:id/price", (req, res) => {

  const productId = parseInt(req.params.id);

  const product = products.find(p => p.id === productId);

  
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  
  if (req.body.price === undefined) {
    return res.status(400).json({ message: "Price is required" });
  }


  product.price = req.body.price;

  res.status(200).json(product);

});





app.listen(3000, () => {
  console.log("Server started on port 3000");
});




