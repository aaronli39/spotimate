const express = require("express");

const app = express();
app.use(express.json());

app.get("/home", (req, res) => {
    console.log("YOYOYOYOYO");
})

app.get("/", (req, res) => {
    console.log("Asdfasdf")
    res.send("hello world!");
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));