const express = require('express');
const app = express();
app.listen(3000, () =>console.log("listening at 3000"));
app.use(express.static("public"));
app.use(express.json({limit: "1mb"}))
app.post('/api', (request, response) =>{
    console.log("I got a request");
    let data = request.body;
    console.log(data)
    response.json({
        status: "Success",
        collectedData: data
    })
})