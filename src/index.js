import './styles.css';
import printFoo from './print.js';

function createElement() {
    var rootElement = document.querySelector('.root');
    var button = document.createElement("button");

    button.innerHTML = "Click on me";
    button.onclick = printFoo;

    element.innerHTML = "Hello Webpack!";

    element.appendChild(button);
    return element;
}

document.body.appendChild(createElement());