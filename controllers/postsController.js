const posts = require("../data/postsData.js");

function index(req, res) {
    res.json(posts);
}

function show(req, res) {
    const post = posts.find((post) => post.id == req.params.id);
    if (isNaN(req.params.id) || !post) {
        res.status(404).send(
            `Id "${req.params.id}" is not valid, no such post exists`,
        );
    } else {
        res.json(posts.find((post) => post.id == req.params.id));
    }
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
    const postToDelete = posts.find((post) => post.id == req.params.id);
    // se viene passato un id che non è un num o non esiste un post con
    // l'id specificato restituisce un errore
    if (isNaN(req.params.id) || !postToDelete) {
        res.status(400).send(
            `Error: post doesnt exist or bad id "${req.params.id}"`,
        );
        // se il post esiste lo elimina dall'array dei post e restituire status ok
    } else {
        const indexOfPost = posts.indexOf(postToDelete);
        posts.splice(indexOfPost, 1);
        res.status(204).send();
        console.log(posts);
    }
}

module.exports = { index, show, store, update, modify, destroy };
