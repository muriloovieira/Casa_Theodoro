document.addEventListener("DOMContentLoaded", () => {
    const languageSwitcher = document.getElementById("languageSwitcher");
    
    fetch("languages.json")
        .then(response => response.json())
        .then(data => {
            languageSwitcher.addEventListener("change", (event) => {
                const selectedLang = event.target.value;
                document.querySelectorAll("[data-lang]").forEach(element => {
                    const key = element.getAttribute("data-lang");
                    if (data[selectedLang] && data[selectedLang][key]) {
                        element.textContent = data[selectedLang][key];
                    }
                });
            });
        })
        .catch(error => console.error("Erro ao carregar idiomas", error));
});

window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar-custom");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    }
});