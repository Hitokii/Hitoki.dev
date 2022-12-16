// COOKIES
function set_cookie(name, value) {
  document.cookie = name + "=" + value + ";";
}

document.getElementById("inputtext").autofocus = true;
document.getElementById("inputtext").value = "";
console.log(
  "Location detected : " + Intl.DateTimeFormat().resolvedOptions().timeZone
);
var language = "EN";
var menu_open = false;

// LANGUAGE

if (Intl.DateTimeFormat().resolvedOptions().timeZone.startsWith("Europe")) {
  var country = Intl.DateTimeFormat().resolvedOptions().timeZone.slice(7);
}
if (Intl.DateTimeFormat().resolvedOptions().timeZone.startsWith("America")) {
  var country = Intl.DateTimeFormat().resolvedOptions().timeZone.slice(8);
}
if (Intl.DateTimeFormat().resolvedOptions().timeZone.startsWith("Asia")) {
  var country = Intl.DateTimeFormat().resolvedOptions().timeZone.slice(5);
}

switch (country) {
  case "Paris":
    language = "FR";
    break;

  case "Tokyo":
    language = "JP";
    break;

  case "Rome":
    language = "IT";
    break;

  case "Moscow":
    language = "RU";
    break;

  case "Beijing":
    language = "CN";
    break;

  default:
    console.log("Default language is set");
    language = "EN";
    break;
}

console.log("Switched to : " + language);

function set_lang(language) {
  fetch("./language.json")
    .then((data) => data.json())
    .then((data) => {
      switch (language) {
        case "FR":
          document.getElementById("inputtext").placeholder = data.FR.searchbar;
          document.getElementById("coder").innerHTML = data.FR.madeby;
          document.getElementById("div").innerHTML = data.FR.title;
          document.getElementById("div").title = data.FR.title;
          document.getElementById("quote").innerHTML = data.FR.quote;
          document.getElementById("txtlangages").innerHTML = data.FR.txtlangue;
          document.getElementById("txtrac").innerHTML = data.FR.txtrac;
          break;

        case "EN":
          document.getElementById("inputtext").placeholder = data.EN.searchbar;
          document.getElementById("coder").innerHTML = data.EN.madeby;
          document.getElementById("div").innerHTML = data.EN.title;
          document.getElementById("div").title = data.EN.title;
          document.getElementById("quote").innerHTML = data.EN.quote;
          document.getElementById("txtlangages").innerHTML = data.EN.txtlangue;
          document.getElementById("txtrac").innerHTML = data.EN.txtrac;
          break;

        case "JP":
          document.getElementById("inputtext").placeholder = data.JP.searchbar;
          document.getElementById("coder").innerHTML = data.JP.madeby;
          document.getElementById("div").style.fontSize = "90px";
          document.getElementById("div").innerHTML = data.JP.title;
          document.getElementById("div").title = data.JP.title;
          document.getElementById("quote").innerHTML = data.JP.quote;
          document.getElementById("txtlangages").innerHTML = data.JP.txtlangue;
          document.getElementById("txtrac").innerHTML = data.JP.txtrac;
          break;

        case "IT":
          document.getElementById("inputtext").placeholder = data.IT.searchbar;
          document.getElementById("coder").innerHTML = data.IT.madeby;
          document.getElementById("div").innerHTML = data.IT.title;
          document.getElementById("div").title = data.IT.title;
          document.getElementById("quote").innerHTML = data.IT.quote;
          document.getElementById("txtlangages").innerHTML = data.IT.txtlangue;
          document.getElementById("txtrac").innerHTML = data.IT.txtrac;
          break;

        case "RU":
          document.getElementById("inputtext").placeholder = data.RU.searchbar;
          document.getElementById("coder").innerHTML = data.RU.madeby;
          document.getElementById("div").innerHTML = data.RU.title;
          document.getElementById("div").title = data.RU.title;
          document.getElementById("quote").innerHTML = data.RU.quote;
          document.getElementById("txtlangages").innerHTML = data.RU.txtlangue;
          document.getElementById("txtrac").innerHTML = data.RU.txtrac;
          break;

        case "CN":
          document.getElementById("inputtext").placeholder = data.CN.searchbar;
          document.getElementById("coder").innerHTML = data.CN.madeby;
          document.getElementById("div").innerHTML = data.CN.title;
          document.getElementById("div").title = data.CN.title;
          document.getElementById("quote").innerHTML = data.CN.quote;
          document.getElementById("txtlangages").innerHTML = data.CN.txtlangue;
          document.getElementById("txtrac").innerHTML = data.CN.txtrac;
          break;

        default:
          document.getElementById("inputtext").placeholder = data.EN.searchbar;
          document.getElementById("coder").innerHTML = data.EN.madeby;
          document.getElementById("div").innerHTML = data.EN.title;
          document.getElementById("div").title = data.EN.title;
          document.getElementById("quote").innerHTML = data.EN.quote;
          document.getElementById("txtlangages").innerHTML = data.EN.txtlangue;
          document.getElementById("txtrac").innerHTML = data.EN.txtrac;
          break;
      }
    });
}
set_lang(language);

// SEARCH

document.getElementById("inputtext").addEventListener("keydown", ({ key }) => {
  if (key === "Enter") {
    var search = document.getElementById("inputtext").value.toString();
    if (search.startsWith(":")) {
      search = search.toLowerCase();
      if (search.slice(1) == "fox") {
        fetch("https://randomfox.ca/floof/")
          .then((data) => data.json())
          .then((data) => {
            document.location.href = data.image;
          });
      } else {
        fetch("./shortcut.json")
          .then((data) => data.json())
          .then((data) => {
            for (i in data) {
              if (i == search.slice(1)) {
                document.location.href = data[i];
                break;
              } else {
                document.location.href = "https://http.cat/404.jpg";
              }
            }
          });
      }
    } else if (search.startsWith("->")) {
      document.location.href =
        "https://stackoverflow.com/search?q=" + search.slice(3);
    } else if (search.startsWith("https://") || search.startsWith("http://")) {
      document.location.href = document.getElementById("inputtext").value;
    } else {
      document.location.href =
        "https://www.google.com/search?channel=fs&q=" +
        document.getElementById("inputtext").value;
    }
  }
});

// EASTER EGG

var compteur = 0;
document.body.addEventListener("keyup", ({ key }) => {
  if (key == "ArrowUp" && (compteur == 0 || compteur == 1)) {
    compteur++;
  }
  if (key == "ArrowDown" && (compteur == 2 || compteur == 3)) {
    compteur++;
  }
  if (key == "ArrowLeft" && (compteur == 4 || compteur == 6)) {
    compteur++;
  }
  if (key == "ArrowRight" && (compteur == 5 || compteur == 7)) {
    compteur++;
  }

  if (compteur == 8) {
    document.body.style.backgroundImage =
      'url("https://media.giphy.com/media/yr7n0u3qzO9nG/giphy.gif")';
  }
});

function open_shortcut() {
  if (!menu_open) {
    document.getElementById("menu_block").style.animation =
      "menu_open 2s ease-in-out forwards";
    document.getElementById("shortcut_logo").style.transform =
      "translateX(-1500%)";
    document.getElementById("logomenu").style.animation =
      "roll_out 2s forwards";
    document.getElementById("logocross").style.animation =
      "roll_out2 2s forwards";
    menu_open = true;
  } else {
    document.getElementById("menu_block").style.animation = "menu_close 2s";
    document.getElementById("shortcut_logo").style.transition = "2s";
    document.getElementById("shortcut_logo").style.transform = "translateX(0%)";
    document.getElementById("logomenu").style.animation = "roll_in 2s forwards";
    document.getElementById("logocross").style.animation =
      "roll_in2 2s forwards";
    menu_open = false;
  }
}
