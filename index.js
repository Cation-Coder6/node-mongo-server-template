require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const bodyParser = require('body-parser')


const connectDB = require("./db/connect");
const authRouter = require("./routes/AuthRoutes");
const userRouter = require("./routes/UserRoutes");


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);


const port = process.env.PORT || 5000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();