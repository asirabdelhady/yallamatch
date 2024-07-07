// Smooth scroll for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 30; // Adjust this value to your desired padding
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Smooth scroll for the "Register Now" button
document.querySelector('.btn-outline-secondary').addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector('#how');
    const offset = 30; // Adjust this value to your desired padding
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});

document.querySelectorAll('.navbar-nav>li>a').forEach(anchor => {
    anchor.addEventListener('click', function () {
        document.querySelector('.navbar-collapse').classList.remove('show');
    });
});

document.querySelector('.navbar-brand').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.querySelectorAll('.navbar-brand').forEach(anchor => {
    anchor.addEventListener('click', function () {
        document.querySelector('.navbar-collapse').classList.remove('show');
    });
});