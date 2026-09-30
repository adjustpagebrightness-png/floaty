// ===== Edit these two lines =====
const STORE_URL = 'https://chromewebstore.google.com/detail/nclpjkdfoiglohogcamecgfaodpabkpc';
const EMAIL = 'adjustpagebrightness@gmail.com';
// ================================
document.querySelectorAll('[data-store]').forEach((a) => (a.href = STORE_URL));
document.querySelectorAll('[data-email]').forEach((a) => {
  a.href = 'mailto:' + EMAIL + '?subject=Floaty';
  if (!a.textContent.trim()) a.textContent = EMAIL;
});
document.querySelectorAll('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));
