const posts = require("../data/postsData.js");

function index(req, res) {
    res.json(posts);
}

function show(req, res) {
    res.json(posts.find((post) => post.id == req.params.id));
}

function store(req, res) {
    res.send("Aggiungo post");
}

function update(req, res) {
    res.send(`Modifico interamento l'elemento con id: ${req.params.id}`);
}

function modify(req, res) {
    res.send(`Aggiorno l'elemento con id: ${req.params.id}`);
}

function destroy(req, res) {
    res.send(`Cancello l'elemento con id: ${req.params.id}`);
}

module.exports = { index, show, store, update, modify, destroy };
