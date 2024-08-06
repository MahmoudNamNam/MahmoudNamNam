AOS.init();

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const navbar = document.querySelector('nav');
const hamNav = document.getElementById('hamburger-nav')
console.log(hamNav);

window.addEventListener('scroll', () => {
    const navWidth = navbar.offsetWidth;
    const hamNavWidth = hamNav.offsetWidth;

    if ((window.scrollY > navWidth) || (window.scrollY > hamNavWidth)) {
      navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
      hamNav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
  } else {
      navbar.style.boxShadow = 'none';
      hamNav.style.boxShadow = 'none';
  }
});