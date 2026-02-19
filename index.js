const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require("./router/posts.js")

app.get("/", (req, res) => {
    res.send("<h1>Benvenuto nel Server del Blog</h1>");
});

// screma l'index.js lasciando la gestione delle richieste CRUD 
// al router di express contenuto in un file esterno posts.js
app.use("/posts", postsRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
