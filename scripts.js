// document.addEventListener("DOMContentLoaded", function() {
//     const hoverItems = document.querySelectorAll(".hover-item");

//     hoverItems.forEach(item => {
//         item.addEventListener("mouseover", function() {
//             this.style.color = "#a3cd39"; // Change text color on hover
//         });
//         item.addEventListener("mouseout", function() {
//             this.style.color = "#333"; // Revert text color when not hovering
//         });
//     });
// });



document.addEventListener("DOMContentLoaded", function() {
    const hoverItems = document.querySelectorAll(".hover-item");
    const contentSection = document.getElementById("content-section");

    hoverItems.forEach(item => {
        item.addEventListener("mouseover", function() {
            this.style.color = "#a3cd39"; // Change text color on hover
        });
        item.addEventListener("mouseout", function() {
            this.style.color = ""; // Reset text color
        });
        item.addEventListener("click", function() {
            loadContent(this.id);
        });
    });

    function loadContent(section) {
        switch(section) {
            case 'events':
                contentSection.innerHTML = `
                    <h2>Events</h2>
                    <div class="gallery">
                        <div class="gallery-item"><img src="event1.jpg" alt="Event 1"></div>
                        <div class="gallery-item"><img src="event2.jpg" alt="Event 2"></div>
                        <div class="gallery-item"><img src="event3.jpg" alt="Event 3"></div>
                        <div class="gallery-item"><img src="event4.jpg" alt="Event 4"></div>
                        <div class="gallery-item"><img src="event5.jpg" alt="Event 5"></div>
                        <div class="gallery-item"><img src="event6.jpg" alt="Event 6"></div>
                    </div>
                    <div class="pagination">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                    </div>
                `;
                break;
            case 'album-01':
                contentSection.innerHTML = `
                    <h2>Album-01</h2>
                    <div class="gallery">
                        <div class="gallery-item"><img src="album1.jpg" alt="Album 1"></div>
                        <div class="gallery-item"><img src="album2.jpg" alt="Album 2"></div>
                        <div class="gallery-item"><img src="album3.jpg" alt="Album 3"></div>
                    </div>
                    <div class="pagination">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                    </div>
                `;
                break;
            // Add more cases for other sections like 'office-life', 'projects', 'album-02', etc.
            default:
                contentSection.innerHTML = '<p>Select a section to view content.</p>';
        }
        // Auto-refresh the section
        window.location.reload();
    }
});
