function toggleMenu() {
  const navList = document.querySelector(".nav-list");
  const navContent = navList.querySelector("ul");
  const loginButton = navList.querySelector(".login");
  const hamburgerIcon = document.querySelector(".fas.fa-bars");

  navList.classList.toggle("active");
  hamburgerIcon.classList.toggle("active");

  // Add a small delay for the content fade-in
  if (navList.classList.contains("active")) {
    setTimeout(() => {
      navContent.style.opacity = "1";
      loginButton.style.opacity = "1";
    }, 150);
  } else {
    navContent.style.opacity = "0";
    loginButton.style.opacity = "0";
  }
}
