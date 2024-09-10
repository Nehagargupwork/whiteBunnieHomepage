

document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.progress-circle');

    circles.forEach(circle => {
        const percentage = circle.getAttribute('data-percentage');
        const fillColor = '#ff7f50'; // Progress color
        const emptyColor = '#828282'; // Background color
        const gradientValue = `${fillColor} ${percentage}%, ${emptyColor} ${percentage}%`;

        circle.style.background = `conic-gradient(${gradientValue})`;
    });
});
