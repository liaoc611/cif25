const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const containers = document.querySelectorAll("#jumbledText");

containers.forEach(container => {
    const p = container.querySelector("p");
    const realText = p.textContent;
    let intervalId = null;

    function jumbleText() {
        let scrambled = "";
        for (let i = 0; i < realText.length; i++) {
            scrambled += realText[i] === " "
                ? " "
                : chars[Math.floor(Math.random() * chars.length)];
        }
        p.textContent = scrambled;
    }

    function startScramble() {
        if (intervalId) return;
        intervalId = setInterval(jumbleText, 60);
    }

    function revealText() {
        clearInterval(intervalId);
        intervalId = null;
        p.textContent = realText;
    }

    startScramble();

    container.addEventListener("mouseenter", revealText);
    container.addEventListener("mouseleave", startScramble);
});

const warningDiv = document.querySelector(".warning");

let clickCount = 0;

warningDiv.addEventListener("click", () => {
    clickCount++;

    if (clickCount === 10) {
        warningDiv.textContent += "_CLOSE_ME!!!!!!";
    }
        else if (clickCount === 11){
        window.location.href = "https://liaoc611.github.io/cif25/nine/entry9.html";
    } 
    else {
        warningDiv.textContent += "_CLOSE_ME";
    }
});