var sidebar = document.getElementsByClassName("sidebar")[0];
sidebar.addEventListener("mouseover", function() {
    sidebar.classList.add("sidebar-hover");
    });
sidebar.addEventListener("mouseout", function() {
    sidebar.classList.remove("sidebar-hover");
    }
);

var flags = document.querySelectorAll(".flag");
flags.forEach(element => {
    element.addEventListener("click", function() {
        flags.forEach(element => {
            element.classList.remove("selected");
        });
        element.classList.add("selected");
    });
})

$('.carousel').carousel().pause = "hover"