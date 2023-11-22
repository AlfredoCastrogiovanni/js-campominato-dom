
const wrapper = document.querySelector("main .wrapper");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", function() {
    const squareNumber = parseInt(document.getElementById("difficulty").value);
    const scoreDisplay = document.querySelector(".score");
    scoreDisplay.textContent = "Score: 0";
    wrapper.innerHTML = "";
    createSquare(wrapper,squareNumber);
});

// ==================== FUNCTIONS ====================

// return a new square
function createSquare(wrapper,times) {
    const bombList = generateBomb(times);
    let gameOver = false;
    let score = 0;

    for(let i=1; i <= times; i++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("square");


        newSquare.style.width = `calc(100% / ${Math.sqrt(times)})`;
        newSquare.style.height = `calc(100% / ${Math.sqrt(times)})`;

        const squareContent = document.createElement("span");
        squareContent.textContent = i;
        newSquare.append(squareContent);

        if(bombList.includes(i)) {
            newSquare.classList.add("bomb");
        }

        newSquare.addEventListener("click", function() {
            if(!gameOver) {
                if(bombList.includes(parseInt(this.textContent))) {
                    squareBombList = document.querySelectorAll(".bomb");
                    for(let i=0; i < squareBombList.length; i++) {
                        squareBombList[i].classList.add("bg-red");
                    }
                    gameOver = true;
                    const gameOverElement = document.createElement("div");
                    gameOverElement.classList.add("alert");
                    gameOverElement.textContent = "GameOver";
                    wrapper.append(gameOverElement);
                } else {
                    this.classList.add("bg-blue");
                    score++
                    console.log("Score : ", score);
                    const scoreDisplay = document.querySelector(".score");
                    scoreDisplay.textContent = `Score: ${score}`;
                }
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