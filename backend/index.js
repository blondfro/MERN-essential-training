import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import routes from "./routes/appRoutes";


const app = express();
const PORT = 4000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/soccerDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// body-parser setup for both urlencoded and json.
app.use(bodyparser.urlencoded({ extended: true}));
app.use(bodyparser.json());

// using CORS -cross origin requests to prevent breakage during api calls.
app.use(cors());

routes(app);

// get command
app.get("/", (req, res) => {
    res.send("Our app is running on port: " + PORT);
});


//listening on the defined port.
app.listen(PORT, () => {
    console.log("Your server is running on port: " + PORT);
});
