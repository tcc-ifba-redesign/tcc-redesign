document.getElementById("toggleContrast").addEventListener("click", function () {
    document.body.classList.toggle("high-contrast");
    localStorage.setItem("highContrast", document.body.classList.contains("high-contrast"));
});

document.getElementById("increaseText").addEventListener("click", function () {
    document.body.classList.add("text-large");
    document.body.classList.remove("text-small");
});

document.getElementById("decreaseText").addEventListener("click", function () {
    document.body.classList.add("text-small");
    document.body.classList.remove("text-large");
});

