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
    if (isNaN(req.params.id)) {
        res.status(400).send(`Error: bad id "${req.params.id}"`)
    }
    // const indexOfPost = posts.indexOf(posts.find((post) => post.id == req.params.id));
    // posts.splice(indexOfPost, 1);
    // res.status(204).send();
    // console.log(posts);
}

module.exports = { index, show, store, update, modify, destroy };
