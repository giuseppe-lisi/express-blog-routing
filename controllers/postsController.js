const posts = require("../data/postsData.js");

// le funzioni delle operazioni CRUD sono gestite dal controller per scremare il router e l'index.js
// tutto è centralizzato meglio e il codice risulta più pulito

function index(req, res) {
    const search = req.query.search;
    const tag = req.query.tags;
    // se presente il query param "tags" copia le tag di ogni post in un array in lower case
    // controlla che l'array di tag contenga il tag della query e se si restituisce il post
    const postsToShow = posts.filter((post) => {
        // filtro per tag
        if (tag) {
            const postTags = post.tags.map((postTag) => postTag.toLowerCase());
            if (!postTags.includes(tag)) return false;
        }
        // filtro per titolo
        if (search) {
            if (!post.title.toLowerCase().includes(search)) return false;
        }

        return true;
    });
    // postTag.charAt(0).toLowerCase() + postTag.slice(1)

    res.json(postsToShow);
}

function show(req, res) {
    const post = posts.find((post) => post.id == req.params.id);
    if (isNaN(req.params.id) || !post) {
        res.status(404).json(
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
        res.status(404).json(
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
