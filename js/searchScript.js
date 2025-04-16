const inputForm = document.querySelector("#search");
const searchButton = document.querySelector("#searchButton");
const searchResult = document.querySelector("#searchResult");

function showSearchResults() {
    const searchTerm = inputForm.value.trim();

    if (searchTerm) {
        searchResult.textContent = `Você buscou por: ${searchTerm}`;
        searchResult.style.display = "block";
    }
}

searchButton.addEventListener("click", (e) => {
    showSearchResults()}
);

inputForm.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        showSearchResults()
        e.preventDefault();
    }
})