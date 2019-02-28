console.log("is this thing on? Hello?");

// When we click any the picture-frame
// A const is a "constant" variable
// which means that it cannot be reassigned.
const targetElements = document.querySelectorAll("[data-target]");

// We see an enlarged version of image that is
// inside the .picture-frame

function respondToClick() {
    console.log("Hello, how are you?");
    console.log("I am a wizard!");
    console.log("What is even the point");
}

function attachClickHandler(oneElement) {
    // this is how we handle one element.
    oneElement.addEventListener("click", respondToClick);
}


targetElements.forEach(attachClickHandler);