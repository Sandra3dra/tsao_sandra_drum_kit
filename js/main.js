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
}

window.addEventListener("keydown", playDrumKitSound);
})();