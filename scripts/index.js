console.log("is this thing on? Hello?");

// When we click any the picture-frame
// A const is a "constant" variable
// which means that it cannot be reassigned.
const targetElements = document.querySelectorAll("[data-target]");

// We see an enlarged version of image that is
// inside the .picture-frame

function respondToClick(event) {
// add the "big" class to the thing that got clicked 
    event.target.parentElement.classList.toggle("imgBorderChange");

//     let imgLink = event.target.getAttribute('src');
//     console.log(imgLink);
}



function attachClickHandler(oneElement) {
    // this is how we handle one element.
    oneElement.addEventListener("click", respondToClick);
}


targetElements.forEach(attachClickHandler);


const aDiv = document.createElement('div');
aDiv.textContent = "This is the dive you created!";
console.log(aDiv);

const body = document.querySelector('body');
body.appendChild(aDiv);

const data = [
    "http://reddit.com",
    "http://apple.com",
]

const navElement = document.querySelector('[data-nav]');
data.forEach(function (url) {
    const newAnchor = document.createElement('a');
    newAnchor.textContent = url;
    newAnchor.setAttribute('href', url);
    navElement.append(newAnchor);
});