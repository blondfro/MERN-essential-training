import express from "express";

const app = express();
const PORT = 3000;

// get command
app.get("/", (req, res) => {
    res.send("Our app is running on port: " + PORT);
});


//listening on the defined port.
app.listen(PORT, () => {
    console.log("Your server is running on port: " + PORT);
});
