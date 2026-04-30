// Active link function منفصلة
function updateActiveLinks() {
    ['home', 'services', 'features', 'testimonials', 'about', 'blog', 'contact', 'faq'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        // بيشمل desktop و mobile links
        document.querySelectorAll(`.nav-link[href="#${id}"], .nav-link[href$="#${id}"]`).forEach(a => {
            a.classList.toggle('active', r.top <= 80 && r.bottom > 80);
        });
    });
}
// Navbar scroll shadow
window.addEventListener('scroll', () => {
    const nb = document.getElementById('navbar');
    nb.classList.toggle('shadow-md', window.scrollY > 20);
    updateActiveLinks();
});
// شغّل على أول load عشان يحدد الـ active من البداية
document.addEventListener('DOMContentLoaded', updateActiveLinks);

// Mobile menu
window.menuOpen = false;
function toggleMenu() {
    window.menuOpen = !window.menuOpen;
    const m = document.getElementById('mobileMenu');
    m.style.display = window.menuOpen ? 'flex' : 'none';
    m.style.flexDirection = 'column';
    const icon = document.querySelector('#hamburgerBtn i');
    icon.classList.toggle('fa-bars', !window.menuOpen);
    icon.classList.toggle('fa-xmark', window.menuOpen);
}
function closeMenu() {
    window.menuOpen = false;
    const m = document.getElementById('mobileMenu');
    m.style.display = 'none';
    const icon = document.querySelector('#hamburgerBtn i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
}

// Scroll reveal
const revealObs = new IntersectionObserver((entries) => {
entries.forEach((e, i) => {
    if (e.isIntersecting) {
    setTimeout(() => e.target.classList.add('visible'), i * 90);
    revealObs.unobserve(e.target);
    }
});
}, { threshold: 0.1 });
document.querySelectorAll('.reveal, .reveal-left').forEach(el => revealObs.observe(el));

// Stagger children inside each section
document.querySelectorAll('.services-grid .service-card, .testimonials-grid .testimonial-card, .blog-grid .blog-card').forEach((el, i) => {
el.style.transitionDelay = `${i * 80}ms`;
});

// Counter animation
function animateCounter(el, target, duration = 1800) {
let start = 0;
const step = target / (duration / 16);
const timer = setInterval(() => {
    start += step;
    if (start >= target) { start = target; clearInterval(timer); }
    el.textContent = Math.floor(start).toLocaleString('ar') + (el.dataset.suffix || '');
}, 16);
}
const counterObs = new IntersectionObserver(entries => {
entries.forEach(e => {
    if (e.isIntersecting) {
    animateCounter(e.target, parseInt(e.target.dataset.target));
    counterObs.unobserve(e.target);
    }
});
}, { threshold: 0.5 });
document.querySelectorAll('[data-target]').forEach(el => counterObs.observe(el));

// Form submit
function handleSubmit() {
const name  = document.getElementById('fName').value.trim();
const phone = document.getElementById('fPhone').value.trim();
if (!name || !phone) {
    alert('يرجى إدخال الاسم ورقم الهاتف على الأقل.');
    return;
}
const alert_ = document.getElementById('successAlert');
alert_.classList.remove('hidden');
['fName','fPhone','fService','fMsg'].forEach(id => { document.getElementById(id).value = ''; });
setTimeout(() => alert_.classList.add('hidden'), 6000);
}
// faq
function toggleFaq(element) {
    element.parentElement.classList.toggle('active');
}
//sidebar scroll
function toggleMobile() {
    document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMobile() {
    document.getElementById('mobileMenu').classList.remove('open');
}
window.addEventListener('scroll', () => {
    document.getElementById('navbar').style.boxShadow =
    window.scrollY > 20 ? '0 4px 20px rgba(0,0,0,0.08)' : 'none';
});