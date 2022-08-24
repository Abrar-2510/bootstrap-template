// nav
var navbar = document.querySelector('#mainNav')
window.onscroll = function() {
  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}