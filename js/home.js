let currentSlide = 0;
const images = document.querySelectorAll('.carousel-image');
const totalSlides = images.length;

function createIndicators() {
    const indicators = document.getElementById('indicators');
    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('carousel-indicator');
        indicator.addEventListener('click', () => goToSlide(i));
        indicators.appendChild(indicator);
    }
    updateIndicators();
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.carousel-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    updateIndicators();
}

setInterval(nextSlide, 7000);

createIndicators();