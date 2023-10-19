const filterToggle = document.querySelector(".filter__toggle");
const filterBody = document.querySelector(".filter__body");

function setFilterToggleValue(showedBody) {
    if (showedBody) {
        return (filterToggle.innerHTML = "Скрыть фильтр");
    }
    filterToggle.innerHTML = "Показать фильтр";
}

function filterToggleEvent() {
    const showedBody = filterBody.classList.toggle("active");
    setFilterToggleValue(showedBody);
}
filterToggle.addEventListener("click", filterToggleEvent);
