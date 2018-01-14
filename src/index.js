import './styles.css';
import printFoo from './print.js';

function createElement() {
    var rootElement = document.querySelector('.root');
    var button = document.createElement("button");

    button.innerHTML = "Click on me";
    button.onclick = printFoo;

    rootElement.innerHTML = "Hello Webpack!";

    rootElement.appendChild(button);
    return rootElement;
}

document.body.appendChild(createElement());