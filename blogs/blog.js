function truncateText(selector, maxLength) {
    const element = document.querySelector(selector);
    let text = element.innerText;

    if (text.length > maxLength) {
        element.innerText = text.substring(0, maxLength) + "...";
    }
}

// Example usage, limiting to 150 characters
truncateText('.limited-text', 160);



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