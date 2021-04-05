const express = require("express");

const app = express();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

app.get("/", function (req, res) {
    res.send("¡Segundo lab completado! ¡Logramos desplegar una aplicación en OpenShift!");
})

app.listen(PORT, HOST, () => {
    console.log(`App listening on port ${PORT}`);
})