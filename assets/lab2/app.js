const express = require("express");
const https = require("https");

const app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.listen(process.env.PORT || 8080, () => {
    console.log("Server listening on port 3000");
})