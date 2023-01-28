const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
    item.addEventListener("click", function(event) {
        event.preventDefault;
        this.classList.toggle("collapsible--expanded");
    })
);