document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.querySelector('.star-container');
    const starCount = 200; 

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 1}s`;
        starContainer.appendChild(star);
    }
});
