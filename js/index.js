
const wrapper = document.querySelector("main .wrapper");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", function() {
    const squareNumber = parseInt(document.getElementById("difficulty").value);
    wrapper.innerHTML = "";
    createSquare(wrapper,squareNumber);
});

// ==================== FUNCTIONS ====================

// return a new square
function createSquare(wrapper,times) {
    for(let i=1; i <= times; i++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("square");

        newSquare.style.width = `calc(100% / ${Math.sqrt(times)})`;
        newSquare.style.height = `calc(100% / ${Math.sqrt(times)})`;

        const squareContent = document.createElement("span");
        squareContent.textContent = i;
        newSquare.append(squareContent);

        const bombList = generateBomb(times);

        newSquare.addEventListener("click", function() {
            // this.classList.add("bg-blue");
            // console.log(this.textContent);

            if(bombList.includes(parseInt(this.textContent))) {
                this.classList.add("bg-red");
                gameOver = false;
            } else {
                this.classList.add("bg-blue");
            }
        });
        
        wrapper.append(newSquare);
    }
}

function generateUniqueRandomNumber(numberList, min, max) {
    if(numberList.length > max - min + 1) {
        console.log("Numeri massimi raggiunti");
        return ;
    }

    let generatedNumber;
    do {
        generatedNumber = Math.floor((Math.random() * (max - min)) + min);
    } while(numberList.includes(generatedNumber)); 

    return generatedNumber;
}

function generateBomb(bombNumber) {
    const bomb = [];
    for(let i=0; i < 16; i++) {
        bomb[i] = generateUniqueRandomNumber(bomb, 1, bombNumber);
    }

    return bomb;
}