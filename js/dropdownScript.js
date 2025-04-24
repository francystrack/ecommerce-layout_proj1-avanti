const categoryContainer = document.querySelector(".category-container");
const drpDP1 = document.querySelector(".drp-dp-1");

drpDP1.addEventListener("mouseover", (e) => {
    categoryContainer.style.visibility = "visible";
});

drpDP1.addEventListener("mouseout", (e) => {
    categoryContainer.style.visibility = "hidden";
});

// mantém o container visível se passar o cursor no container depois de abrir ele através do botão
categoryContainer.addEventListener("mouseover", (e) => {
    categoryContainer.style.visibility = "visible";
});

categoryContainer.addEventListener("mouseout", (e) => {
    categoryContainer.style.visibility = "hidden";
});



//tratamento do dropdown "todas as categorias"

const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

if (window.innerWidth <= 768) {
    dropdown.addEventListener("touchstart", (e) => {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }
        else {
            dropdownContent.style.display = "block";
        }
    });
}
