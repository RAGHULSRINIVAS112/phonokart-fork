require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Sucessfull!"))
  .catch((err) => {
    console.log(err);
  });

//MIDDLEWARE
app.use(express.json());

//ROUTES
app.use("/api/auth", authRoute);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend server is running! ${process.env.PORT}`);
});
