function setSectionHeight() {
    const sections = document.querySelectorAll('.section');
    const vh = window.innerHeight;
    sections.forEach(sec => {
        sec.style.height = vh + 'px';
    });
}

// Устанавливаем высоту при загрузке и ресайзе
window.addEventListener('load', setSectionHeight);
window.addEventListener('resize', setSectionHeight);
