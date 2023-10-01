let themeswitch = document.querySelector('#themeswitcher');

    

localStorage.getItem("theme") === null ? localStorage.setItem("theme", "light") : document.querySelector("html").setAttribute("data-bs-theme", localStorage.getItem("theme"));


themeswitch.addEventListener('click', function() {
    document.querySelector("html").setAttribute("data-bs-theme", document.querySelector("html").getAttribute("data-bs-theme") === "dark" ? "light" : "dark");
    localStorage.setItem("theme", document.querySelector("html").getAttribute("data-bs-theme"));
});


function getRepoStat(component, name) {
    console.log(component + "hey");
    let url = `https://api.github.com/repos/hitokii/${name}/languages` 
    fetch(url).then(data => data.json()).then(res => {
        let total = 0;
        for (let i in res) {
            if (i == "message") {
                console.log(res)
                console.log("Error Fetching : " + component.getAttribute("name"));
                return
            }
            total += res[i];
        }
        for (let i in res) {
            component.innerHTML += `<p class=\"card-text\">-${i}</p><div class=\"progress\">  <div class=\"progress-bar ${i}-language\" role=\"progressbar\" style=\"width: ${res[i] / total * 100}%;\" aria-valuenow=\"${res[i] / total * 100}\" aria-valuemin=\"0\" aria-valuemax=\"100\">${Math.round(res[i] / total * 100)}%</div></div>`
        }
    })
}

document.querySelectorAll(".repo").forEach((repo) => {
    getRepoStat(repo, repo.getAttribute("name"));
});