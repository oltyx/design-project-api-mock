var express = require("express");
var app = express();
var cors = require('cors')

app.use(cors());

app.listen(3333, () => {
 console.log("Server running on port 3333");
});

progress = 0

app.get("/progress", (req, res, next) => {
 if(progress < 100){
 	progress++
 }
 res.json({ "progress": progress });
});
