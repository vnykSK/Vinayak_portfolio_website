// Scroll reveal
const obs = new IntersectionObserver(els => els.forEach(e => {
  if (e.isIntersecting) e.target.classList.add('visible');
}), {
  threshold: 0.1
});
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
