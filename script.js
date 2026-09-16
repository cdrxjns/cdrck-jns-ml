/* =========================================================
   SCROLL PROGRESS
========================================================= */

const scrollProgress =
  document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {

  const scrollTop = window.scrollY;

  const documentHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress =
    documentHeight > 0
      ? (scrollTop / documentHeight) * 100
      : 0;

  scrollProgress.style.width =
    progress + "%";

});


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuBtn =
  document.getElementById("menuBtn");

const navLinks =
  document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("show");

  const icon =
    menuBtn.querySelector("i");

  if (navLinks.classList.contains("show")) {

    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");

  } else {

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  }

});


document
  .querySelectorAll(".nav-links a")
  .forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("show");

      const icon =
        menuBtn.querySelector("i");

      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");

    });

  });


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
  document.querySelectorAll("section[id]");

const navItems =
  document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    const sectionHeight =
      section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY <
      sectionTop + sectionHeight
    ) {

      current =
        section.getAttribute("id");

    }

  });


  navItems.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      "#" + current
    ) {

      link.classList.add("active");

    }

  });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

        }

      });

    },
    {
      threshold: 0.12
    }
  );

revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* =========================================================
   BIRTHDAY MESSAGE
========================================================= */

function birthdayMessage() {

  alert(
    "🎉 Happy Birthday, Cedrick! 🎂\n\n" +
    "June 10, 2005 is my birthday!\n\n" +
    "Luke 1:37 — For with God nothing shall be impossible."
  );

}


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
  document.getElementById("contactForm");

const formMessage =
  document.getElementById("formMessage");

contactForm.addEventListener("submit", event => {

  event.preventDefault();

  formMessage.style.display = "block";

  contactForm.reset();

  setTimeout(() => {

    formMessage.style.display = "none";

  }, 5000);

});


/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById("year").textContent =
  new Date().getFullYear();