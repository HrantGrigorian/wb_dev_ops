import './styles.css';
import printFoo from './print.js';
// import myImage from './icon.png';

function createElement() {
    var element = document.querySelector('.hello');
    var button = document.createElement("button");

    button.innerHTML = "Click on me";
    button.onclick = printFoo;
    // var myIcon = new Image();
    // myIcon.src = myImage;

    element.innerHTML = "Hello Webpack!";

    element.appendChild(button);
    // element.appendChild(myIcon);

    return element;
}

document.body.appendChild(createElement());