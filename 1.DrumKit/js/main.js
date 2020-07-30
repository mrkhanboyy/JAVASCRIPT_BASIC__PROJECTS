// JULY-30-2020

window.addEventListener("keypress", function (e) {
  //getting keypress event
  let keyNumber = e.keyCode;
  let keyValue = e.key;
  var keyCodes = [65, 83, 68, 70, 71, 72, 74, 75, 76]; //array with keyvalue events we need

  /*
   *   if the entered key is present in our array we will play
   *   corresponding sound.
   */
  if (keyCodes.includes(keyNumber)) {
    let audio = document.getElementById("A" + keyNumber);
    audio.currentTime = 0; // rewinding audio
    audio.play();

    let element = document.querySelector("." + keyValue);
    // adding our design class
    element.classList.add("keyValueClass");
    //removing design class after 0.2 seconds
    setTimeout(function () {
      element.classList.remove("keyValueClass");
    }, 200);
  }
});
