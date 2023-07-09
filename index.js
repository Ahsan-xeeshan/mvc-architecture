const express = require("express");

const userRouter = require("./routes/user.route");
const productRouter = require("./routes/product.route ");

const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(productRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "resource not found",
  });
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
