// Example: Track clicks on affiliate links
const affiliateLinks = document.querySelectorAll('#affiliate-links a');

affiliateLinks.forEach(link => {
    link.addEventListener('click', function() {
        alert('Thank you for supporting us by clicking this link!');
    });
});
    document.addEventListener("DOMContentLoaded", () => {
        // Select all slideshows
        const slideshows = document.querySelectorAll(".slideshow");

        slideshows.forEach((slideshow) => {
            let images = slideshow.querySelectorAll("img");
            let currentIndex = 0;

            // Function to change the active image
            const changeImage = () => {
                images[currentIndex].classList.remove("active"); // Remove active class from the current image
                currentIndex = (currentIndex + 1) % images.length; // Move to the next image (loop back to the first)
                images[currentIndex].classList.add("active"); // Add active class to the new image
            };

            // Set interval to change the image every 3 seconds
            setInterval(changeImage, 3000);
        });
    });


