
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

        newSquare.addEventListener("click", function() {
            this.classList.add("bg-blue");
            console.log(this.textContent);
        });
        
        wrapper.append(newSquare);
    }
}