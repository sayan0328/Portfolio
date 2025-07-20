if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    toggleTheme()
}

function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');

    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
        themeToggle.textContent = '☀️';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '🌙';
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

var typed = new Typed('#element', {
      strings: ['a B.Tech IT Student', 'an Android Developer', 'a Web Developer'],
      typeSpeed: 70,
      loop: true,
    });