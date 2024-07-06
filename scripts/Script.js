window.addEventListener('popstate', react);

const pushUrl = (href) => {
  history.pushState({}, '', href);
  window.dispatchEvent(new Event('popstate'), { url: href });
};


if (!document.location.hash == "")
  document.querySelector(document.location.hash).hidden = false;
else  
  document.location.hash = "#home";

function react(href) {
  // href.target.location.hash
    let pages = ["#home", "#about", "#skills", "#projects", "#contact"]
    console.log(href.target.location.hash);
    window.scrollTo(0, 0);
    pages.forEach(page => {
      document.querySelector(page).style.animation = "fadeOUT 1s forwards";
      setTimeout(() => {
        document.querySelector(page).hidden = true;
        if (href.target.location.hash == page) {
          document.querySelector(page).style.animation = "fadeIN 1s forwards";
          document.querySelector(page).hidden = false;
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

document.querySelector("#age").innerText = getAge();