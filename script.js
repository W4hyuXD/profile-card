document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.querySelector(".progress-bar");
    
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = `${width}%`;
        }
    }, 30);
});

const profileCard = document.querySelector(".profile-card");
profileCard.addEventListener("mouseenter", () => {
    profileCard.style.boxShadow = "0 10px 40px rgba(0, 188, 212, 0.8)";
});
profileCard.addEventListener("mouseleave", () => {
    profileCard.style.boxShadow = "0 8px 30px rgba(0, 188, 212, 0.5)";
});
