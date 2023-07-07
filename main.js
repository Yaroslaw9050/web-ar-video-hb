let tempTarget = null;
let myVideo = null;
let myVideoEntity = null;

let isFinde = false;
let div = document.createElement('div');

window.onload = () => {
  const content = document.querySelector('#baseContant');
  div.style.display = "none";
  content.style.display = "block";
};

document.addEventListener("DOMContentLoaded", function() {

  const content = document.querySelector('#baseContant');
  console.log(content);
  content.style.display = "none";
  // Встановлення тексту "Loading"
  div.innerHTML = 'Loading...';
  
  // Стилізація елементу
  div.style.position = 'fixed';
  div.style.fontSize = "25px"
  div.style.top = '50%';
  div.style.left = '50%';
  div.style.transform = 'translate(-50%, -50%)';
  div.style.backgroundColor = 'white';
  div.style.padding = '20px';
  div.style.borderRadius = '5px';
  //div.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
  div.style.zIndex = '9999';
  
  // Додавання елементу до body
  document.body.appendChild(div);
  
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
    console.log("loaded!");
	});
	sceneEl.addEventListener("arError", (event) => {
	});
	exampleTarget.addEventListener("targetFound", event => {
      console.log(event);
	  console.log("target found");
      myVideo.play();
      isFinde = true;
	});
	exampleTarget.addEventListener("targetLost", event => {
	  console.log("target lost");
      myVideo.pause();
      isFinde = false;
	});
    examplePlane.addEventListener("click", event => {
	  console.log("plane click");
	});
});

AFRAME.registerComponent('target', {
  init: function () {
      // console.log("Init");
      // tempTarget = document.querySelector('#example-target').object3D;
      // myVideoEntity = document.querySelector('#example-plane');
      // myVideoEntity.setAttribute('visible', true);
      // myVideo = myVideoEntity.object3D;
  },

  tick: function (time, timeDelta) {

      // if(isFinde)
      // {
      //     let worldPosition = new THREE.Vector3();
      //     tempTarget.getWorldPosition(worldPosition);
      //     console.log("Target");
      //     console.log(worldPosition);

      //     myVideo.position.copy(worldPosition);

      //     myVideoEntity.setAttribute('position', myVideo.position);
      //     console.log("Sub");
      //     console.log(myVideoEntity.getAttribute('position'));
      //     // Do something on every scene tick or frame.
      // }

    }
});