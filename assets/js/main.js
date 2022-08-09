/* CREATE NAV AND FOOTER */
// export const createNavAndFooter = (headerId, footerId, active) => {
//   const year = new Date().getFullYear();

//   const nav = `
//     <nav class="nav container">
//       <div>
//         <a href="./index.html" class="nav-logo">QDNP</a>
//       </div>

//       <div id="nav-menu" class="nav-menu">
//         <ul class="nav-list">
//           <li class="nav-item">
//             <a href="./index.html" class="nav-link">
//               <i class="ri-home-line"></i>
//               <span>Accueil</span>
//             </a>
//           </li>

//           <li class="nav-item">
//             <a href="./news.html" class="nav-link">
//               <i class="ri-newspaper-line"></i>
//               <span>News</span>
//             </a>
//           </li>

//           <li class="nav-item">
//             <a href="./artistes.html" class="nav-link">
//               <i class="ri-user-voice-line"></i>
//               <span>Artistes</span>
//             </a>
//           </li>

//           <li class="nav-item">
//             <a href="./musiques.html" class="nav-link">
//               <i class="ri-headphone-line"></i>
//               <span>Musiques</span>
//             </a>
//           </li>

//           <li class="nav-item">
//             <a href="./videos.html" class="nav-link">
//               <i class="ri-video-line"></i>
//               <span>Videos</span>
//             </a>
//           </li>
//         </ul>
//       </div>

//       <i id="nav-theme" class="ri-moon-line nav-theme"></i>
//     </nav>
//   `;
//   const footerElement = `
//     <div class="footer-container container grid">
//       <div>
//         <h3 class="footer-logo">QDNP</h3>
//         <p class="footer-description">Studio de production musicale</p>
//       </div>

//       <div class="footer-content">
//         <div>
//           <h3 class="footer-title">Pages</h3>

//           <ul class="footer-links">
//             <li>
//               <a href="./news.html" class="footer-link">News</a>
//             </li>

//             <li>
//               <a href="./artistes.html" class="footer-link">Artistes</a>
//             </li>

//             <li>
//               <a href="./musiques.html" class="footer-link">Musiques</a>
//             </li>

//             <li>
//               <a href="./videos.html" class="footer-link">Videos</a>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <h3 class="footer-title">Productions</h3>

//           <ul class="footer-links">
//             <li>
//               <a href="#" class="footer-link">Qui sommes-nous ?</a>
//             </li>

//             <li>
//               <a href="#" class="footer-link">Nous Contactez</a>
//             </li>

//             <li>
//               <a href="#" class="footer-link">Conditons Utilisation</a>
//             </li>

//             <li>
//               <a href="#" class="footer-link">Mentions L&eacute;gals</a>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <h3 class="footer-title">R&eacute;seaux</h3>

//           <ul class="footer-social">
//             <a href="#" class="footer-social-link">
//               <i class="ri-facebook-line"></i>
//             </a>

//             <a href="#" class="footer-social-link">
//               <i class="ri-instagram-line"></i>
//             </a>

//             <a href="#" class="footer-social-link">
//               <i class="ri-youtube-line"></i>
//             </a>
//           </ul>
//         </div>
//       </div>
//     </div>

//     <span class="footer-copyright">
//       &copy; ${year.toString()} QDNP, Tous droits r&eacute;serv&eacute;s.
//     </span>
//   `;

//   const header = document.getElementById(headerId),
//     footer = document.getElementById(footerId);

//   header.innerHTML = nav;
//   footer.innerHTML = footerElement;

//   document.querySelectorAll(".nav-link")[active].classList.add("is-active");

/* HEADER SCROLL */
const scrollHeader = (headerId) => {
  const header = document.getElementById(headerId);
  if (window.scrollY >= 75) header.classList.add("is-scroll");
  else header.classList.remove("is-scroll");
};
window.addEventListener("scroll", () => scrollHeader("header"));

/* SCROLL UP */
// const scrollUp = (scrollupId) => {
//   const scrollUp = document.getElementById(scrollupId);
//   scrollUp.onclick = () => {
//     window.scrollTo(0, 0);
//   };
// };
// scrollUp("scroll-up");

/* SHOW SCROLL UP */
const showScrollUp = (scrollupId) => {
  const scrollUp = document.getElementById(scrollupId);

  if (window.scrollY >= 350) scrollUp.classList.add("show-scrollup");
  else scrollUp.classList.remove("show-scrollup");
};
window.addEventListener("scroll", () => showScrollUp("scroll-up"));

/* DARK @ LIGHT THEME */
const themeButton = document.getElementById("nav-theme"),
  darkTheme = "dark-theme",
  iconTheme = "ri-sun-line",
  selectedTheme = localStorage.getItem("selected-theme"),
  selectedIcon = localStorage.getItem("selected-icon"),
  getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light",
  getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/* SCROLLREVEAL */
const footerReveal = ScrollReveal({
  origin: "left",
  distance: "60px",
  duration: 2000,
  delay: 400,
});

footerReveal.reveal(`.footer-logo`);
footerReveal.reveal(`.footer-title, .footer-description`, { delay: 500 });
footerReveal.reveal(`.footer-links, .footer-social`, { delay: 600 });
footerReveal.reveal(`.footer-link, .footer-social-link`, { delay: 700 });
footerReveal.reveal(`.footer-copyright`, { delay: 800 });
// };
