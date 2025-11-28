var instructionText = document.getElementById("instructionText");
var timeScale = document.getElementById("timeScale");
var breathImage = document.getElementById("breathImage");

function breathing() {

    function breatheIn() {
        update("Nádech", 4, "inhale", breatheHold);
    }

    function breatheHold() {
        update("Zadrž dech", 7, "hold", breatheOut);
    }

    function breatheOut() {
        update("Výdech", 8, "exhale", breatheIn);
    }

    breatheIn();
}


function update(instruction, breathTime, breathingDog, callback) {
    let i = 0;
    
    const interval = setInterval(() => {
        if (i === 0) {
            instructionText.innerText = instruction;
            breathImage.src = "img/dog_" + breathingDog + ".png";
        }
        i++;
        timeScale.style.width = (i / breathTime) * 100 + "%";

        if (i >= breathTime) {
            clearInterval(interval);
            if (callback) callback();
        }
    }, 1000);
}

