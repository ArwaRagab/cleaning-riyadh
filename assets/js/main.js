 // Navbar scroll shadow
window.addEventListener('scroll', () => {
const nb = document.getElementById('navbar');
nb.classList.toggle('shadow-md', window.scrollY > 20);
// Active link
['home','services','features','testimonials','about','blog','contact'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const r = el.getBoundingClientRect();
    const a = document.querySelector(`.nav-link[href="#${id}"]`);
    if (a) a.classList.toggle('active', r.top <= 80 && r.bottom > 80);
});
});

// Mobile menu
let menuOpen = false;
function toggleMenu() {
menuOpen = !menuOpen;
const m = document.getElementById('mobileMenu');
m.classList.toggle('hidden', !menuOpen);
m.classList.toggle('flex', menuOpen);
// Animate hamburger
document.getElementById('hb1').style.transform = menuOpen ? 'translateY(7.5px) rotate(45deg)' : '';
document.getElementById('hb2').style.opacity = menuOpen ? '0' : '1';
document.getElementById('hb3').style.transform = menuOpen ? 'translateY(-7.5px) rotate(-45deg)' : '';
}
function closeMenu() {
menuOpen = false;
document.getElementById('mobileMenu').classList.add('hidden');
document.getElementById('mobileMenu').classList.remove('flex');
document.getElementById('hb1').style.transform = '';
document.getElementById('hb2').style.opacity = '1';
document.getElementById('hb3').style.transform = '';
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