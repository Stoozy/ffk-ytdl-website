const express = require('express');
const app = express();

app.use("/public", express.static(__dirname + '/public'));
app.use("/public/js", express.static(__dirname + '/public/js'));


app.get('/', (req, res) =>{ 
    res.redirect("/public");
});

app.listen(3000, () => console.log(' ⚡️[server]: Server is running at https://localhost:3000'));
