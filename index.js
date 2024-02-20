const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // entry.target.classList.remove("hidden")
            entry.target.classList.add("show")
        }
        else {
            entry.target.classList.remove("show")
            // entry.target.classList.add("hidden")
        }
    })
})
const hiddenElements = document.getElementsByClassName("hidden")
for (let i = 0; i < hiddenElements.length; i++) {
    observer.observe(hiddenElements[i])
}

var preloader = document.querySelector(".loader");
window.addEventListener("load", function () {
    preloader.classList.add("disappear");
});



