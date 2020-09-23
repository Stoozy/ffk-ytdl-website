const express = require('express');
const app = express();

app.use("/public", express.static(__dirname + '/public'));
app.use("/public/js", express.static(__dirname + '/public/js'));


app.get('/', (req, res) =>{ 
    res.redirect("/public");
});

var PORT = process.env.PORT ||  8080;
app.listen(PORT, () => console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`));
