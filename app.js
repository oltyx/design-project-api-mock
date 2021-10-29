var express = require("express");
var app = express();
var cors = require('cors')

app.use(cors());

app.listen(3333, () => {
 console.log("Server running on port 3333");
});

var progress = 0
var stop = false
schedule = {}

app.get("/progress", (req, res, next) => {
    if (progress < 100 && !stop) {
        progress++
    }
    res.json({ "progress": progress });
});

app.post("/session", (req, res, next) => {
    let valStop = req.params.get("stop");
    if (typeof valStop == "boolean") {
        stop = valStop
    }
    let valProgress = req.params.get("progress");
    if (typeof valProgress == "number") {
        progress = valProgress
    }
    res.sendStatus(200);
})

