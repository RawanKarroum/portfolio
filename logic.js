var typed = new Typed(".multiple-text", {
	strings: ["Software Engineer","Full-Stack Developer","Programmer", "Dreamer" ],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
	loop: true
})

document.addEventListener('DOMContentLoaded', function () {
    const skillItems = document.querySelectorAll('.skill-item');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, Math.random() * 1000); // Delay between 0 to 1 second
                observer.unobserve(entry.target);
            }
        });
    }, options);

    skillItems.forEach(item => {
        observer.observe(item);
    });
});