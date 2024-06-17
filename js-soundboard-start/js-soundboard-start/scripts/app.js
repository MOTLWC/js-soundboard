//! Queries and other constants
const buttonGrid = document.querySelector(".gridBox");
const pathSetUp = "/js-soundboard-start/js-soundboard-start/sounds/";
//! Listening Events
buttonGrid.addEventListener("click", (e) => {
    console.log(e.target.id);
    switch(e.target.id){
        case("after"):
        playAudio(e.target.id);
        break;
        case("better"):
        playAudio(e.target.id);
        break;
        case("do_it"):
        playAudio(e.target.id);
        break;
        case("ever"):
        playAudio(e.target.id);
        break;
        case("faster"):
        playAudio(e.target.id);
        break;
        case("harder"):
        playAudio(e.target.id);
        break;
        case("hour"):
        playAudio(e.target.id);
        break;
        case("make_it"):
        playAudio(e.target.id);
        break;
        case("makes_us"):
        playAudio(e.target.id);
        break;
        case("more_than"):
        console.log("Switch");
        playAudio(e.target.id);
        break;
        case("never"):
        playAudio(e.target.id);
        break;
        case("our"):
        playAudio(e.target.id);
        break;
        case("over"):
        playAudio(e.target.id);
        break;
        case("stronger"):
        playAudio(e.target.id);
        break;
        case("work_is"):
        playAudio(e.target.id);
        break;
        case("work_it"):
        playAudio(e.target.id);
        break;
    }
});
//! Audio
// get audio path based on button
function getPath(fileName){
    return `${pathSetUp}${fileName}.wav`;
}
// play audio
// get element, get path, play sound, profit
function playAudio(buttonID){
    const buttonElement = document.getElementById(buttonID);
    console.dir(buttonElement.firstElementChild);
    buttonElement.firstElementChild.setAttribute("src",getPath(buttonID))
    buttonElement.firstElementChild.play();
    console.dir(buttonElement);
}
// add style to correct button
