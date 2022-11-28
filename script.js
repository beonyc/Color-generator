let colors = document.querySelectorAll(".color");
document.getElementById("color-button").onclick = setColor;
window.onload = setColor;
const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F",];



//получение рандомного цвета в формате #FFFFFF
function colorRand() {
    let colorHex = '';
    for (let i = 0; i < 6; i++) {
        let rand = Math.floor(Math.random() * hex.length);
        colorHex += hex[rand];
    }
    return "#" + colorHex;
}

//функция полученяи цвета всех элементов
function setColor() {
    colors.forEach((col) => {
        let randomColor = colorRand();
        col.style.background = randomColor;
        const text = col.querySelector("h2");
        text.textContent = randomColor;
        setTextColor(text, randomColor);
    }
    )
}

//определяет тон цвета текста и меняет его цвет
function setTextColor(text, color) {   asdas
    const luminance = chroma(color).luminance();
    text.style.color = luminance > 0.5 ? "black" : "white";
}




