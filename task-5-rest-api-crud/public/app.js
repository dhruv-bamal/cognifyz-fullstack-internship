const notesDiv = document.getElementById("notes");
const refreshBtn = document.getElementById("refreshBtn");

const form = document.getElementById("noteForm");
const formTitle = document.getElementById("formTitle");
const titleEl = document.getElementById("title");
const contentEl = document.getElementById("content");
const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");

const alertBox = document.getElementById("alert");

let editingId = null;

function showAlert(message, type = "success") {
    alertBox.textContent = message;
    alertBox.className = `alert ${type}`;
    alertBox.classList.remove("hidden");
    setTimeout(() => alertBox.classList.add("hidden"), 1800);
}

async function api(path, options = {}) {
    const res = await fetch(path, options);
    if (res.status === 204) return null;
    const data = await res.json().catch(() => null);

    if (!res.ok) {
        const msg = data?.message || "Something went wrong";
        throw new Error(msg);
    }
    return data;
}

function renderNotes(list) {
    if (!list.length) {
        notesDiv.innerHTML = `<div class="note"><p>No notes yet. Add one above 👆</p></div>`;
        return;
    }

    notesDiv.innerHTML = list.map(n => `
    <div class="note">
      <h3>${escapeHtml(n.title)}</h3>
      <p>${escapeHtml(n.content)}</p>
      <div class="meta">#${n.id} • ${new Date(n.createdAt).toLocaleString()}</div>
      <div class="row">
        <button class="secondary" onclick="startEdit(${n.id})">Edit</button>
        <button onclick="deleteNote(${n.id})">Delete</button>
      </div>
    </div>
  `).join("");
}


function escapeHtml(str) {
    return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

async function loadNotes() {
    const list = await api("/api/notes");
    renderNotes(list);
}

async function createNote(title, content) {
    return api("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content })
    });
}

async function updateNote(id, title, content) {
    return api(`/api/notes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content })
    });
}

async function deleteNote(id) {
    try {
        await api(`/api/notes/${id}`, { method: "DELETE" });
        showAlert("Note deleted ✅", "success");
        await loadNotes();

        if (editingId === id) resetForm();
    } catch (e) {
        showAlert(e.message, "error");
    }
}

async function startEdit(id) {
    try {
        const note = await api(`/api/notes/${id}`);
        editingId = id;
        formTitle.textContent = `Edit Note #${id}`;
        submitBtn.textContent = "Update Note";
        cancelBtn.classList.remove("hidden");

        titleEl.value = note.title;
        contentEl.value = note.content;
        titleEl.focus();
    } catch (e) {
        showAlert(e.message, "error");
    }
}

function resetForm() {
    editingId = null;
    formTitle.textContent = "Create Note";
    submitBtn.textContent = "Add Note";
    cancelBtn.classList.add("hidden");
    form.reset();
}

function validate(title, content) {
    if (!title.trim() || !content.trim()) return "Title and content are required.";
    if (title.trim().length < 3) return "Title must be at least 3 characters.";
    if (content.trim().length < 5) return "Content must be at least 5 characters.";
    return null;
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = titleEl.value;
    const content = contentEl.value;

    const err = validate(title, content);
    if (err) return showAlert(err, "error");

    try {
        if (editingId) {
            await updateNote(editingId, title, content);
            showAlert("Note updated ✅", "success");
        } else {
            await createNote(title, content);
            showAlert("Note created ✅", "success");
        }

        resetForm();
        await loadNotes();
    } catch (e2) {
        showAlert(e2.message, "error");
    }
});

cancelBtn.addEventListener("click", resetForm);
refreshBtn.addEventListener("click", loadNotes);


loadNotes();