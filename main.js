document.addEventListener("DOMContentLoaded", function() {
	const sceneEl = document.querySelector('a-scene');
	let arSystem;
	sceneEl.addEventListener('loaded', function () {
	  arSystem = sceneEl.systems["mindar-image-system"];
	});
    const uiContainer = document.querySelector('#example-start-button');
	const exampleTarget = document.querySelector('#example-target');
    const examplePlane = document.querySelector('#example-plane');
	const startButton = document.querySelector("#example-start-button");
    const myVideo = document.querySelector("#base_video");
	startButton.addEventListener('click', () => {
	  arSystem.start();
      console.log(uiContainer);
      uiContainer.style.display = 'none';
      myVideo.play();
      myVideo.pause();
	});
	sceneEl.addEventListener("arReady", (event) => {
	});
	sceneEl.addEventListener("arError", (event) => {
	});
	exampleTarget.addEventListener("targetFound", event => {
	  console.log("target found");
      myVideo.play();
	});
	exampleTarget.addEventListener("targetLost", event => {
	  console.log("target lost");
      myVideo.pause();
	});
    examplePlane.addEventListener("click", event => {
	  console.log("plane click");
	});
      });