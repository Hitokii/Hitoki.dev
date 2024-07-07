var lang = "fr";
window.addEventListener('popstate', react);

const pushUrl = (href) => {
  history.pushState({}, '', href);
  window.dispatchEvent(new Event('popstate'), { url: href });
};

if (!document.location.hash == "")
  document.querySelectorAll(document.location.hash).forEach(e => e.hidden = false);
else  
  document.location.hash = "#home";

document.querySelectorAll(`a[href=\"${document.location.hash}\"]`).forEach(e => e.setAttribute("enabled", "true"));
function react(href) {
  // href.target.location.hash
  let pages = ["#home", "#about", "#skills", "#projects", "#contact"]
    window.scrollTo(0, 0);
    pages.forEach(page => {
      document.querySelectorAll(page).forEach(e => e.style.animation = "fadeOUT 1s forwards");
      document.querySelectorAll(`a[href=\"${page}\"]`).forEach(e => e.setAttribute("enabled", "false"));
      setTimeout(() => {
        document.querySelectorAll(page).forEach(e => e.hidden = true);
        if (href.target.location.hash == page) {
          document.querySelectorAll(page).forEach(e => e.style.animation = "fadeIN 1s forwards");
          document.querySelectorAll(page).forEach(e => e.hidden = false);
          if (page != "#contact")
            document.querySelectorAll(`a[href=\"${page}\"]`).forEach(e => e.setAttribute("enabled", "true"));
        }
      }, 1000);
    });

}


function getAge() {
  let birthDate = new Date("2002-12-14");
  let currentDate = new Date();
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  let m = currentDate.getMonth() - birthDate.getMonth();
  if (m < 0 || (m >= 0 && currentDate.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}





fetch("Assets/i18n.json").then(response => response.json()).then(i18n => {
  document.querySelectorAll("*").forEach(e => {
    if (e.hasAttribute("aria-label")) {
      e.innerHTML = i18n[lang][e.getAttribute("aria-label")];
    }
  });
  document.querySelector("#age").innerText = getAge();
});


function changeLang() {
  lang = lang == "fr" ? "en" : "fr";
  flag = document.querySelector("#flagimage");
  flag.src = lang == "en" ? "Assets/img/uk.png" : "Assets/img/france.png";
  fetch("Assets/i18n.json").then(response => response.json()).then(i18n => {
    document.querySelectorAll("*").forEach(e => {
      if (e.hasAttribute("aria-label")) {
        e.innerHTML = i18n[lang][e.getAttribute("aria-label")];
      }
    });
  });
}