function truncateText(selector, maxLength) {
    const elements = document.querySelectorAll(selector); // Select all elements that match the selector
    elements.forEach(element => {
        let text = element.innerText;
        if (text.length > maxLength) {
            element.innerText = text.substring(0, maxLength) + "...";
        }
    });
}

// Example usage, limiting to 160 and 120 characters
truncateText('.limited-text', 160);
truncateText('.limited-text-bloCard', 120);



var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});













