// https://www.google.com/search?channel=fs&client=ubuntu&q=
console.log("Script loaded !");
document.getElementById("inputtext").value = "";
document.getElementById("inputtext").addEventListener("keyup", ({ key }) => {
  if (key === "Enter") {
    var search = document.getElementById("inputtext").value.toString();
    if (search.startsWith(":")) {
      search = search.toLowerCase();
      fetch("./shortcut.json")
        .then((data) => data.json())
        .then((data) => {
          for (i in data) {
            if (i == search.slice(1)) {
              document.location.href = data[i];
            }
          }
        });
    } else if (search.startsWith("https://") || search.startsWith("http://")) {
      document.location.href = document.getElementById("inputtext").value;
    } else {
      document.location.href =
        "https://www.google.com/search?channel=fs&q=" +
        document.getElementById("inputtext").value;
    }
  }
});

var compteur = 0;
document.body.addEventListener("keyup", ({ key }) => {
  if (key == "ArrowUp" && (compteur == 0 || compteur == 2)) {
    compteur++;
  }
  if (key == "ArrowDown" && (compteur == 1 || compteur == 3)) {
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
  console.log(compteur);
});
