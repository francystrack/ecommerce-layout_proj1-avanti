const categoryContainer = document.querySelector(".categoryContainer");
const drpDP1 = document.querySelector(".drpDP1");

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