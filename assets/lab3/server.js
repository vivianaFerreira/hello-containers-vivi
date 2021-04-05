const express = require("express");

const app = express();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

app.get("/", function (req, res) {
    res.send("¡Tercer lab completado! ¡Logramos desplegar una aplicación en OpenShift con un Dockerfile!");
})

app.listen(PORT, HOST, () => {
    console.log(`App listening on port ${PORT}`);
})