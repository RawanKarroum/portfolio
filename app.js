document.addEventListener('DOMContentLoaded', function () {
    let items = document.querySelectorAll('.projects-container .project-item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');

    let active = 0;

    function loadShow() {
        let stt = 0;
        items.forEach((item, index) => {
            item.style.transform = `translateX(${(index - active) * 120}px) scale(${index === active ? 1 : 0.8}) perspective(16px) rotateY(${index === active ? 0 : index < active ? 1 : -1}deg)`;
            item.style.zIndex = index === active ? 1 : -Math.abs(index - active);
            item.style.filter = index === active ? 'none' : 'blur(5px)';
            item.style.opacity = Math.abs(index - active) > 2 ? 0 : (index === active ? 1 : 0.6);
        });
    }

    loadShow();

    next.onclick = function () {
        active = (active + 1) % items.length;
        loadShow();
    }

    prev.onclick = function () {
        active = (active - 1 + items.length) % items.length;
        loadShow();
    }
});