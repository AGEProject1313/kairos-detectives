document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const fullArticle = this.parentElement.querySelector(".full-article");

            if (fullArticle.style.display === "none" || fullArticle.style.display === "") {
                fullArticle.style.display = "block";
                this.textContent = "Leggi meno";
            } else {
                fullArticle.style.display = "none";
                this.textContent = "Leggi tutto";
            }
        });
    });
});
