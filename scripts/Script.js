function cursorPointer(element) {
    element.style.cursor = "pointer";
}

let text = "visiteur@hitokidev:~$ ";

async function printTextToTerminal() {
    await new Promise(r => setTimeout(r, 2000));
    let terminal = document.getElementById("input");
    for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        
        await new Promise(r => setTimeout(r, 50));
    }
}
printTextToTerminal()