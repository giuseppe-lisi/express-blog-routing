const posts = require("../data/postsData.js");

// le funzioni delle operazioni CRUD sono gestite dal controller per scremare il router e l'index.js
// tutto è centralizzato meglio e il codice risulta più pulito

function index(req, res) {
    const search = req.query.search;
    const tag = req.query.tags;
    // filtra contemporaneamente per tag e ricerca del titolo
    // restituisce tutti i post nel caso in cui non venga applicato nessun filtro
    const postsToShow = posts.filter((post) => {
        // filtro per tag
        if (tag) {
            const postTags = post.tags.map((postTag) => postTag.toLowerCase());
            // se il tag non è presente stoppa subito il filtro e il post non viene restituito
            if (!postTags.includes(tag)) return false;
        }
        // filtro per titolo
        if (search) {
            // se la ricerca non corriposnde con il titolo di nessun post allo questo non viene restituito
            if (!post.title.toLowerCase().includes(search)) return false;
        }
        // restituisce il post se ha passato entrambi i check di filtro
        return true;
    });

    res.json(postsToShow);
}

function show(req, res) {
    const post = posts.find((post) => post.id == req.params.id);
    if (isNaN(req.params.id) || !post) {
        res.status(404)
        
        return res.json(
            {
                error: "Not Found",
                message: `Id "${req.params.id}" is not valid, no such post exists`,
            }
        );
    } else {
        res.json(posts.find((post) => post.id == req.params.id));
    }
}

function store(req, res) {
    console.log("hai creato un nuovo post");
    const newPost = res.body;
    console.log(newPost);
    
    
    res.json("hai creato un nuovo post")
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
