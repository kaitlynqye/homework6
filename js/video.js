var video;

// window.addEventListener("load", function() {
// 	console.log("Good job opening the window")

// });

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

// Page Load: Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
	video.load(); // reload the video with autoplay and loop settings
	document.getElementById("volume").innerText = video.volume * 100 + "%";
})

// Play Button: Play the video and update the volume information.  
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play video");
	video.play();
	document.getElementById("volume").innerText = video.volume * 100 + "%";
})

// Pause Button: Pause the video.
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause video");
	video.pause();
})

// Slow Down: Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
})

// Speed Up: Increase the current video speed each time the button is clicked and log the new speed to the console.
// Change it by an amount proportional to the slow down. 
// If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
})

// Skip Ahead: Advance the current video by 10 seconds.  
// If the video length has been exceeded go back to the start of the video - no farther.   
// Log the current location of the video.
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0;
	}
	console.log("Video current time is " + video.currentTime);
})

// Mute: Mute/unmute the video and update the text in the button.
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		console.log("Unmute");
		video.muted = false;
		this.innerText = "Mute";
	} else {
		console.log("Mute");
		video.muted = true;
		this.innerText = "Unmute";
	}
})

// Volume Slider: Change the volume based on the slider and update the volume information.
document.querySelector("#slider").addEventListener("input", function () {
	video.volume = this.value / 100;
	document.getElementById("volume").innerText = video.volume * 100 + "%";
	console.log("Current value is " + video.volume);
});

// Styled: Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
});

// Original: Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
});

