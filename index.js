const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Server del mio blog!");
});

app.use(express.static('public/imgs'));

app.get("/bacheca", (req, res) => {
    const posts = [
        {
            titolo: "Introduzione alla Produzione Musicale Digitale",
            contenuto:
                "Una panoramica completa sulle basi della produzione musicale digitale: scelta della DAW, interfacce audio, microfoni e primi passi nella registrazione domestica.",
            immagine:
                "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
            tag: "produzione musicale, DAW, home studio, registrazione",
        },
        {
            titolo: "Microfonazione: Tecniche Essenziali per Principianti",
            contenuto:
                "Guida pratica alle principali tecniche di microfonazione per voce e strumenti acustici, con esempi di configurazioni cardioide, omnidirezionale e figura a otto.",
            immagine:
                "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
            tag: "microfoni, tecniche audio, recording, sound engineering",
        },
        {
            titolo: "Equalizzazione: Come Dare Spazio al Mix",
            contenuto:
                "Approfondimento sull'uso dell'equalizzatore per migliorare chiarezza e definizione nel mix, con consigli pratici su tagli, boost e gestione delle frequenze problematiche.",
            immagine:
                "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
            tag: "equalizzazione, mixing, frequenze, post-produzione",
        },
        {
            titolo: "Compressione Audio: Controllo e Creatività",
            contenuto:
                "Spiegazione dei parametri fondamentali della compressione (threshold, ratio, attack, release) e di come usarli sia per controllo dinamico che per effetti creativi.",
            immagine:
                "https://images.unsplash.com/photo-1621976975813-10e88ae6e450",
            tag: "compressione, dinamica, mixing tips, produzione audio",
        },
        {
            titolo: "Mastering: L'Ultimo Passo Prima della Pubblicazione",
            contenuto:
                "Panoramica sul processo di mastering: bilanciamento finale, limiting, loudness e preparazione dei file per le principali piattaforme di streaming.",
            immagine:
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
            tag: "mastering, loudness, distribuzione musicale, audio professionale",
        },
    ];
    res.json(posts);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
