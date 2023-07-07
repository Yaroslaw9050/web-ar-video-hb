let tempTarget = null;
let myVideo = null;
let myVideoEntity = null;

let isFinde = false;

const content = document.querySelector('.content');
content.style.display = "none";

document.addEventListener("DOMContentLoaded", function() {
  content.style.display = "block";
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
     