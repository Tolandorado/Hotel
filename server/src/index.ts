import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
/* Route imp */
import bookingRoutes from "./Routes/bookingRoute"
import userRoutes from "./Routes/userRoute"
//...

/* Config */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* Routes */
app.get('/', (req, res) => {
    res.send("This is home route");
})

app.use("/booking", bookingRoutes);
app.use("/user", userRoutes);

/* Server */
const port = Number(process.env.SERVER_PORT) || 3000;
app.listen(port, "0.0.0.0", () => {
    console.log(`Server is running on part ${port}`);
})
