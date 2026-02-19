const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.html("<h1>Benvenuto nel Server del Blog</h1>");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
