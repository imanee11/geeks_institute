const express = require("express");
const app = express();
const greetRouter = require("./routes/greet");

app.use(express.urlencoded({ extended: true })); // to read form data

app.use("/", greetRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
