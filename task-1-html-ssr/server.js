const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("index", { error: null, formData: null });
});


app.post("/submit", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).render("index", {
            error: "All fields are required.",
            formData: { name, email, message }
        });
    }

    res.render("success", { name, email, message });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});