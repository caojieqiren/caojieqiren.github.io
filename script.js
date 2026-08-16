// 移动端菜单开关
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// 点击菜单项后自动收起（手机体验更好）
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('open');
  }
});

// 深色模式切换（初始主题在 index.html 的 <head> 里已经设置好）
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function saveTheme(t) {
  try { localStorage.setItem('theme', t); } catch (e) {}
}

themeToggle.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  if (isDark) {
    root.removeAttribute('data-theme');
    saveTheme('light');
  } else {
    root.setAttribute('data-theme', 'dark');
    saveTheme('dark');
  }
});

// 页脚年份自动更新
document.getElementById('year').textContent = new Date().getFullYear();

// 滚动浮现动画（配合 CSS 里的 .reveal）
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}
