/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  let menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
let typingEffect = new Typed(".typedText", {
  strings: ["Front Developer", "Prompt Engineer","React Js"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/* -- PROJECT CARD (ANIMATED) -- */
sr.reveal(".project-card", { interval: 200, origin: "bottom", distance: "60px", duration: 1200 });

/* -- JOURNEY CARD (EDUCATION & EXPERIENCE ANIMATED) -- */
sr.reveal(".journey-card", { interval: 200, origin: "left", distance: "60px", duration: 1200 });

/* -- CERTIFICATE CARD (ANIMATED) -- */
sr.reveal(".certificate-card", { interval: 180, origin: "bottom", distance: "50px", duration: 1000 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- MEDIUM BLOGS FETCH AND RENDER ----- */
(function fetchMediumBlogs() {
  const container = document.getElementById('blogs-container');
  if (!container) return;
  const mediumRssUrl = 'https://medium.com/feed/@bhushansatote95';
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(mediumRssUrl)}`;

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      console.log('Medium API response:', data); // DEBUG: See what the API returns
      if (!data.items || !data.items.length) {
        container.innerHTML = '<p>No blogs found.</p>';
        return;
      }
      const blogs = data.items; // Show all posts, even if categories are empty
      if (!blogs.length) {
        container.innerHTML = '<p>No blogs found.</p>';
        return;
      }
      container.innerHTML = blogs.slice(0, 6).map(item => `
        <div class="blog-card">
          <img src="${item.thumbnail || 'https://cdn-icons-png.flaticon.com/512/5968/5968885.png'}" alt="Blog Thumbnail">
          <h3>${item.title}</h3>
          <p>${item.pubDate ? new Date(item.pubDate).toLocaleDateString() : ''}</p>
          <a href="${item.link}" target="_blank">Read More</a>
        </div>
      `).join('');
    })
    .catch((err) => {
      console.error('Medium API error:', err);
      container.innerHTML = '<p>Unable to load blogs at this time.</p>';
    });
})();

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);
