const express = require("express");
const connectDB = require("./config/db.config");
const userTypeRouter = require("./router/userType.router");
const userRouter = require("./router/user.router");
const productRouter = require("./router/product.router");
const cors = require("cors");

const port = 3000;

const app = express();
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.use(express.json());
connectDB();

app.use("/images", express.static("./imgs"));
app.use("/userType", userTypeRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);

app.listen(port, (_) => console.log(`server is running on port ${port}`));
