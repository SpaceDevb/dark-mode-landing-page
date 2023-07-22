const d = document;

const barsBtn = d.querySelector(".nav__btn"),
    anchors = d.querySelector(".nav__anchors"),
    darkModeBtn = d.querySelector(".darkbtn"),
    container = d.querySelector(".container"),
    nav = d.querySelector(".nav"),
    main = d.querySelector(".main");

darkModeBtn.addEventListener("click", (e) => {
    darkMode(e);
    console.log();
});

barsBtn.addEventListener("click", (e) => {
    fadeBars();
});

function fadeBars() {
    let currentStyle = anchors.getAttribute("style");

    anchors.classList.toggle("translate");

    // if (!currentStyle || currentStyle === "transform: translateX(1000px);") {
    //     anchors.style.transform = "translateX(0px)";
    // }

    // if (currentStyle === "transform: translateX(0px);") {
    //     anchors.style.transform = "translateX(1000px)";
    // }

    // if (container.classList.contains("dark-mode")) {
    // }
}

function darkMode(event) {
    event.target.classList.toggle("fa-sun");
    event.target.classList.toggle("fa-moon");
    container.classList.toggle("dark-mode");
}
