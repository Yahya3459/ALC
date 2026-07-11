/**
 * ALC Main JavaScript
 * Handles common UI interactions and utility functions
 */

// Handle Scroll Effects
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Lazy Loading for Images
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});

// Utility for formatting phone numbers
export const formatPhoneNumber = (phone) => {
    return phone.replace(/\D/g, '');
};

// Common Form Validation
export const validateForm = (data) => {
    const errors = [];
    if (!data.fullName || data.fullName.length < 5) errors.push('الاسم يجب أن يكون كاملاً');
    if (!data.phone || data.phone.length < 9) errors.push('رقم الهاتف غير صحيح');
    return errors;
};
