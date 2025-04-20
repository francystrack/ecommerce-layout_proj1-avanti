const inputForm = document.querySelector("#search");
const searchButton = document.querySelector("#search-button");
const searchResult = document.querySelector("#search-result");

function showSearchResults() {
    const searchTerm = inputForm.value.trim();

    if (searchTerm) {
        searchResult.textContent = `Você buscou por: ${searchTerm}`;
        searchResult.style.display = "block";
    }
}

searchButton.addEventListener("click", (e) => {
    showSearchResults();
});

inputForm.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        showSearchResults();
        e.preventDefault();
    }
});