const express = require("express");
const router = express.Router();
const posts = require("../data/postsData.js");

router.get("/", (req, res) => {
    res.json(posts);
})

router.get("/:id", (req, res) => {
    res.send(`Restituisco post con id: ${req.params.id}`);
})

router.post("/", (req, res) => {
    res.send("Aggiungo post");
})

router.put("/:id", (req, res) => {
    res.send(`Modifico interamento l'elemento con id: ${req.params.id}`);
})

router.patch("/:id", (req, res) => {
    res.send(`Aggiorno l'elemento con id: ${req.params.id}`);
})

router.delete("/:id", (req, res) => {
    res.send(`Cancello l'elemento con id: ${req.params.id}`);
})

module.exports = router;