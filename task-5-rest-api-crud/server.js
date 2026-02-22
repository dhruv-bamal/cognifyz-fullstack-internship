const express = require("express");
const path = require("path");

const app = express();
const PORT = 3002;


app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


let notes = [
    { id: 1, title: "Welcome", content: "This is your Notes API ✅", createdAt: new Date().toISOString() }
];
let nextId = 2;


function isNonEmpty(str) {
    return typeof str === "string" && str.trim().length > 0;
}




app.get("/api/notes", (req, res) => {
    res.json(notes);
});


app.get("/api/notes/:id", (req, res) => {
    const id = Number(req.params.id);
    const note = notes.find(n => n.id === id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
});


app.post("/api/notes", (req, res) => {
    const { title, content } = req.body;

    if (!isNonEmpty(title) || !isNonEmpty(content)) {
        return res.status(400).json({ message: "Title and content are required." });
    }

    const newNote = {
        id: nextId++,
        title: title.trim(),
        content: content.trim(),
        createdAt: new Date().toISOString()
    };

    notes.unshift(newNote);
    res.status(201).json(newNote);
});


app.put("/api/notes/:id", (req, res) => {
    const id = Number(req.params.id);
    const { title, content } = req.body;

    if (!isNonEmpty(title) || !isNonEmpty(content)) {
        return res.status(400).json({ message: "Title and content are required." });
    }

    const idx = notes.findIndex(n => n.id === id);
    if (idx === -1) return res.status(404).json({ message: "Note not found" });

    notes[idx] = { ...notes[idx], title: title.trim(), content: content.trim() };
    res.json(notes[idx]);
});


app.delete("/api/notes/:id", (req, res) => {
    const id = Number(req.params.id);
    const before = notes.length;
    notes = notes.filter(n => n.id !== id);

    if (notes.length === before) {
        return res.status(404).json({ message: "Note not found" });
    }

    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Task 5 running on http://localhost:${PORT}`);
});