const { response } = require('express');
const express = require('express');
const app = express();
const dataStore = require("nedb");
app.listen(3000, () =>console.log("listening at 3000"));
app.use(express.static("public"));
app.use(express.json({limit: "1mb"}));
let recievedData = new dataStore("databas.db");
recievedData.loadDatabase();  

app.get("/api", (request, response) =>{
     recievedData.find({}, (err, data) =>{
        if(err){
            response.end();
            return;
        }
        response.json(data);
     })
})
app.post('/api', (request, response) =>{
    console.log("I got a request");
    let data = request.body;
    data.timestamp = Date.now();
    recievedData.insert(data);
    response.json({
        status: "Success",
        collectedData: data
    })
})