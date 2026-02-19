const express = require("express");
const app = express();
const port = 3000;
const posts = require("./posts.js");

app.get("/", (req, res) => {
    res.send("<h1>Benvenuto nel Server del Blog</h1>");
});

app.get("/posts", (req, res) => {
    res.send("Lista dei Post")
})

app.get("/posts/:id", (req, res) => {
    console.log(`Restituisco post con id: ${req.params.id}`);
})

app.post("/posts", (req, res) => {
    console.log("Aggiungo post");
})

app.put("/posts/:id", (req, res) => {
    console.log(`Modifico interamento l'elemento con id: ${req.params.id}`);
})

app.patch("/posts/:id", (req, res) => {
    console.log(`Aggiorno l'elemento con id: ${req.params.id}`);
})

app.delete("/posts/:id", (req, res) => {
    console.log(`Cancello l'elemento con id: ${req.params.id}`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
