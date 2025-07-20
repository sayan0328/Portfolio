
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.backdropFilter = 'blur(10px)';
    }
});

document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 8px 32px rgba(121, 132, 247, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = 'none';
    });
});