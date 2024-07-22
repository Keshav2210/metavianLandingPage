document.addEventListener("DOMContentLoaded", function() {
    const hoverItems = document.querySelectorAll(".hover-item");

    hoverItems.forEach(item => {
        item.addEventListener("mouseover", function() {
            this.style.color = "#a3cd39"; // Change text color on hover
        });
        item.addEventListener("mouseout", function() {
            this.style.color = "#333"; // Revert text color when not hovering
        });
    });
});
