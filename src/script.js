function toggleMenu(){
  const nav = document.getElementById('nav');
  const btn = document.querySelector('.nav-toggle');
  const isOpen = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

// Поточний рік у футері
const y = document.getElementById('year'); if(y){ y.textContent = new Date().getFullYear(); }
