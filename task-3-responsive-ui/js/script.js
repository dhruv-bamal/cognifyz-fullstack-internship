const search = document.getElementById("search");
const cardGrid = document.getElementById("cardGrid");
const savedInfo = document.getElementById("savedInfo");

let savedCount = 0;

cardGrid.addEventListener("click", (e) => {
    const saveBtn = e.target.closest(".save-btn");
    if (saveBtn) {
        savedCount += 1;
        savedInfo.textContent = `Saved: ${savedCount}`;
        saveBtn.textContent = "Saved ✓";
        saveBtn.disabled = true;
    }
});


search.addEventListener("input", () => {
    const value = search.value.trim().toLowerCase();
    document.querySelectorAll(".card-item").forEach((item) => {
        const title = item.dataset.title.toLowerCase();
        item.style.display = title.includes(value) ? "" : "none";
    });
});


const detailsModal = document.getElementById("detailsModal");
detailsModal.addEventListener("show.bs.modal", (event) => {
    const btn = event.relatedTarget;
    const title = btn.getAttribute("data-title");
    const desc = btn.getAttribute("data-desc");

    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalDesc").textContent = desc;
});