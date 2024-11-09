document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel-wrapper');

    carousels.forEach(carouselWrapper => {
        const carousel = carouselWrapper.querySelector('.carousel');
        const prevButton = carouselWrapper.querySelector('.prev');
        const nextButton = carouselWrapper.querySelector('.next');
        
        let currentIndex = 0;
        const totalItems = carousel.querySelectorAll('.produto').length;

        function getVisibleItems() {
            const defaultVisibleItems = parseInt(carouselWrapper.getAttribute('data-visible-items'), 10) || 4;
            if (window.innerWidth <= 480) {
                return 1;
            } else if (window.innerWidth <= 768) {
                return 2;
            } else {
                return defaultVisibleItems;
            }
        }

        function updateCarousel() {
            const visibleItems = getVisibleItems();
            carousel.style.transform = `translateX(-${currentIndex * (100 / visibleItems)}%)`;
        }

        nextButton.addEventListener('click', function() {
            const visibleItems = getVisibleItems();
            if (currentIndex >= totalItems - visibleItems) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            updateCarousel();
        });

        prevButton.addEventListener('click', function() {
            const visibleItems = getVisibleItems();
            if (currentIndex === 0) {
                currentIndex = totalItems - visibleItems;
            } else {
                currentIndex--;
            }
            updateCarousel();
        });

        window.addEventListener('resize', updateCarousel);
    });
});