document.addEventListener("DOMContentLoaded", function() {
    const downloadBtn = document.getElementById("downloadBtn");
    downloadBtn.addEventListener("click", function() {
        window.location.href = "https://link-hub.net/1295121/download-syneroid";
    });

    showSection("home"); // Відкриває головну вкладку при запуску
});

function showSection(sectionId) {
    document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active');
    });

    document.getElementById(sectionId).classList.add('active');
}
