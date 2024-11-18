const express = require('express');
const app = express();

app.get('/names', (req, res) => {
    res.send("Lance Jared Cabiscuelas")
})

app.listen(5000, () => {
    console.log("Server listen on port 5000");
})