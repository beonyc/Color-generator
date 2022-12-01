let colors = document.querySelectorAll(".color");
document.getElementById("color-button").onclick = setColor;
document.getElementById("save-button").onclick = saveColors;
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
    colors.forEach(col => {
        let randomColor = colorRand();
        col.style.background = randomColor;
        const text = col.querySelector("h2");
        const button = col.querySelector("button");
        text.textContent = randomColor;
        text.dataset.colorcopy = randomColor;
        setTextColor(text, randomColor);
        setTextColor(button, randomColor);
    }
    )
}


//определяет тон цвета текста и меняет его цвет элементов на нём
function setTextColor(text, color) {
    const luminance = chroma(color).luminance();
    text.style.color = luminance > 0.5 ? "black" : "white";
}


document.addEventListener('click', event => {
    const type = event.target.dataset.type
    if (type == "next") {
        const name = event.target.tagName.toLowerCase() == "button"
            ? event.target
            : event.target.parentNode;
        nextColor(name);
    }



})

//копирование цвета
document.addEventListener('click', event => {
    const press = event.target.dataset.press
    if (press == "presstocopy") {
        let target = event.target.dataset.colorcopy;
        navigator.clipboard.writeText(target);
        
        alert(`скопирован цвет ${target}`)

    }
})



function nextColor(child) {
    let currentDiv = child.parentNode;
    let randomColor = colorRand();
    currentDiv.style.background = randomColor;
    let text1 = currentDiv.querySelector("h2");
    let button2 = currentDiv.querySelector("button");
    text1.textContent = randomColor;
    setTextColor(text1, randomColor);
    setTextColor(button2, randomColor);

}

function saveColors() {

    const colorToCopy = document.querySelector(".colors-frame");
    const newColors = colorToCopy.cloneNode(true);
    const savedColor = document.querySelector(".saved-colors");
    savedColor.prepend(newColors);

    addClassToAllcolors();
    colorToCopy.classList.remove("new-colors");
    colorToCopy.classList.add("colors-frame");

    //каждому классу .color в сохранёных цветах добавляем новый класс
    const currentNewColor = document.querySelectorAll(".new-colors div.color");
    currentNewColor.forEach(elem => {
        elem.classList.add("current-color")
        elem.querySelector("i").remove();
    })



}
function addClassToAllcolors() {

    const colorToCopy = document.querySelectorAll(".colors-frame");
    colorToCopy.forEach(curr => {
        curr.classList.add("new-colors");
        curr.classList.remove("colors-frame");
    });

}


