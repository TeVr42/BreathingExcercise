var instructionText = document.getElementById("instructionText");
var timeScale = document.getElementById("timeScale");
var breathImage = document.getElementById("breathImage");

function breathing() {

    function breatheIn() {
        update("Nádech", 4, true, breatheHold);
    }

    function breatheHold() {
        update("Zadrž dech", 7, false, breatheOut);
    }

    function breatheOut() {
        update("Výdech", 8, true, breatheIn);
    }

    breatheIn();
}


function update(instruction, breathTime, breathingDog, callback) {
    let i = 0;
    const interval = setInterval(() => {
        if (i === 0) {
            instructionText.innerText = instruction;
            if (breathingDog) {
                breathImage.src = "img/dog_breathe.png";
            } else {
                breathImage.src = "img/dog_hold.png";
            }
        }
        timeScale.style.width = (i / breathTime) * 100 + "%";
        i++;

        if (i > breathTime) {
            clearInterval(interval);
            if (callback) callback();
        }
    }, 1000);
}

