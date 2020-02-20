let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

document.addEventListener('keydown', function(k) {
	if (k.key === "ArrowLeft") {
		moveDodgerLeft()
	}
	else if (k.key === "ArrowRight") {
		moveDodgerRight()
	}
});



function moveDodgerLeft() {
	let left = Number(dodger.style.left.replace("px", ""));
	if (left >= 0) {
		dodger.style.left = `${left-1}px`;
	}
}

function moveDodgerRight() {
	let left = Number(dodger.style.left.replace("px", ""));
	if (left <= 360) {
		dodger.style.left = `${left+1}px`;
	}
}