let devtech = document.querySelector('#devtech');

let index = 0;
async function typeWriter() {
    let techs = ["Javascript", "Typescript", "Java", "C++"]
    await removeWord();

    let word = techs[index];

    setTimeout(() => {
        devtech.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16); 
        for (let i = 0; i < word.length; i++) {
            const element = word[i];
            setTimeout(() => {
                devtech.innerHTML += element;
            }, 100 * i + Math.random() * 100);
        }
    }, 1500);
    index == techs.length - 1 ? index = 0 : index++;
}

async function removeWord() {
    for (let i = 0; i < devtech.innerHTML.length; i++) {
        setTimeout(() => {
            devtech.innerHTML = devtech.innerHTML.slice(0, -1);
        }, 100 * i + Math.random() * 100);
    }
}
typeWriter();
setInterval(() => typeWriter(), 5000);