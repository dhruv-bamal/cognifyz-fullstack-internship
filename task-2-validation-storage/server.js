const express = require("express");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


const submissions = [];


function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function isValidPhone(phone) {

    return /^[0-9]{10}$/.test(phone);
}

function isStrongPassword(pw) {

    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(pw);
}

app.get("/", (req, res) => {
    res.render("index", { error: null, formData: {} });
});

app.post("/register", (req, res) => {
    const { name, email, phone, password, confirmPassword } = req.body;


    if (!name || !email || !phone || !password || !confirmPassword) {
        return res.status(400).render("index", {
            error: "All fields are required.",
            formData: req.body
        });
    }

    if (!isValidEmail(email)) {
        return res.status(400).render("index", {
            error: "Invalid email format.",
            formData: req.body
        });
    }

    if (!isValidPhone(phone)) {
        return res.status(400).render("index", {
            error: "Phone must be 10 digits.",
            formData: req.body
        });
    }

    if (!isStrongPassword(password)) {
        return res.status(400).render("index", {
            error: "Password must be at least 8 characters and include letters + numbers.",
            formData: req.body
        });
    }

    if (password !== confirmPassword) {
        return res.status(400).render("index", {
            error: "Passwords do not match.",
            formData: req.body
        });
    }

    submissions.push({
        name,
        email,
        phone,
        createdAt: new Date().toISOString()
    });

    res.redirect("/submissions");
});

app.get("/submissions", (req, res) => {
    res.render("submissions", { submissions });
});

app.listen(PORT, () => {
    console.log(`Task 2 running on http://localhost:${PORT}`);
});