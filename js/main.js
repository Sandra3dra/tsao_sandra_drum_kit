(() => { 
console.log("Fired! Ready to jam!");

 function playDrumKitSound(event) { 
 // debugger; 
	let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
 		// console.log(audio);
 		// if no audio element, return false
 		if (!audio) {return; } //return stops code execution
 		//! is a "not" operator or a bang
 		audio.currentTime = 0;
		audio.play();

		//grab div and animate it
		let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
		key.classList.add("playing");
}

function removePlayingClass(event) {
	// debugger;
	if (event.propertyName !== "transform") {
		return;
	} else {
		console.log("transition is done", `${event.propertyName}`);
		event.target.classList.remove("playing");
	}
}

const keys = Array.from(document.querySelectorAll(".keys"));

keys.forEach(key => key.addEventListener("transitionend", removePlayingClass));

window.addEventListener("keydown", playDrumKitSound);
})();