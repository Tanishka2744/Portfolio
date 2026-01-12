const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');

        document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
        link.classList.add('active');
    });
});


const topBtn = document.getElementById('topBtn');


const skillSpans = document.querySelectorAll('.progress-line span');

const skillsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            skillSpans.forEach(span => {
                const width = span.getAttribute('data-width') || '60';

                setTimeout(() => {
                    span.style.width = width + '%';
                }, 150);
            });

            skillsObserver.disconnect();
        }
    });
}, { threshold: 0.35 });


const skillsSection = document.getElementById('skills');
if (skillsSection) skillsObserver.observe(skillsSection);



document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
        navbar.classList.remove('active');
    }
});


const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 90;
        const id = current.getAttribute('id');
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
});
