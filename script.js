document.addEventListener("DOMContentLoaded", function() {
    const heroH1 = document.querySelector(".hero h1");
    const heroP = document.querySelector(".hero p");

    setTimeout(() => {
        heroH1.style.opacity = 1;
        heroH1.style.transform = "translateY(0)";
    }, 500); // Fade in after 0.5 seconds

    setTimeout(() => {
        heroP.style.opacity = 1;
        heroP.style.transform = "translateY(0)";
    }, 1000); // Fade in after 1 second
});
