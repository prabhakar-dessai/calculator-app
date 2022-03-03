let finalOutput = 0;
let mathsyb;

const numClicked = document.querySelectorAll(".num-btn");
for (let i = 0; i < numClicked.length; i++) {
	numClicked[i].addEventListener("click", function (Event) {
		if (parseInt(document.querySelector(".screen").innerText) === 0) {
			document.querySelector(".screen").innerText = Event.target.innerText;
		} else {
			document.querySelector(".screen").innerText += Event.target.innerText;
		}
	});
}

document.querySelector(".back-btn").addEventListener("click", function (Event) {
	const sOutput = document.querySelector(".screen").innerText;
	document.querySelector(".screen").innerText = sOutput.substring(
		0,
		sOutput.length - 1
	);
});

document
	.querySelector(".clear-btn")
	.addEventListener("click", function (Event) {
		document.querySelector(".screen").innerHTML = 0;
		finalOutput = 0;
	});

const symClicked = document.querySelectorAll(".calc-btn");
for (let i = 0; i < symClicked.length; i++) {
	symClicked[i].addEventListener("click", function (Event) {
		let sOutput = document.querySelector(".screen").innerText;
		document.querySelector(".screen").innerHTML = 0;
		sOutput = parseInt(sOutput);
		if (finalOutput === 0) {
			finalOutput = sOutput;
			mathsyb = Event.target.innerText;
		} else {
			switch (mathsyb) {
				case "+":
					finalOutput += sOutput;
					break;
				case "-":
					finalOutput -= sOutput;
					break;
				case "x":
					finalOutput = finalOutput * sOutput;
					break;
				case "÷":
					finalOutput = finalOutput / sOutput;
					break;
			}
			mathsyb = Event.target.innerHTML;
			if (mathsyb === "=") {
				document.querySelector(".screen").innerHTML = finalOutput;
				finalOutput = 0;
			}
		}
	});
}
