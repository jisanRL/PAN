function init() {

  if(window.DeviceOrientationEvent) {
    document.getElementById("text").innerHTML = "Supports orientation events";
    window.addEventListener("deviceorientation", orientationCallback, true);
  } else {
    document.getElementById("text").innerHMTL = "No orientation event support";
  }
}

function orientationCallback(eventData) {

  document.getElementById("text").innerHTML = "Pitch: " + eventData.beta + "Tilt" + eventData.gamma;

  var tilt = eventData.gamma;                 //setting local variable tilt and pitch
  var pitch = eventData.beta

  //clamp pitch and tilt to the range -90..90.
  if (pitch < -90){
    pitch = -90;
  } else if (pitch > 90) {
    pitch = 90;
  }

  if (tilt < -90) {
    tilt = -90;
  } else if (tilt > 90) {
    tilt = 90;
  }

  var d = document.getElementById("center");              //position cross to center
  var x0 = (window.innerWidth - d.offsetWidth) / 2;
  var y0 = (window.innerHeight - d.offsetHeight) / 2;
  d.style.top = y0 + "px";
  d.style.left = x0 + "px";

  var c = document.getElementById("ball");                //positions the ball depending on pitch and tilt values
  var x = (window.innerWidth - d.offsetWidth) / 2;
  var y = (window.innerHeight - d.offsetHeight) / 2;

  var dx = (x * tilt) / 90;
  var dy = (y * pitch) / 90;
  c.style.top = (y + dy) + "px";
  c.style.left = (x + dx) + "px";

}

alert("javascript loaded");
window.onload = init;
