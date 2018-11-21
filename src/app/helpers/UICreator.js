import primaryId from './primaryIdGenerator';

class UICreator {
    constructor() {

    }

    _textInput() {
        const input = document.createElement('input');
        input.setAttribute('key', primaryId());
        return input;
    }

    _div() {
        const div = document.createElement('div');
        div.setAttribute('key', primaryId());
        return div;
    }

    _button() {
        const button = document.createElement('button');
        button.setAttribute('key', primaryId());
        return button;
    }

    _span() {
        const span = document.createElement('span');
        span.setAttribute('key', primaryId());
        return span;
    }

    _addKey(ellement) {
        ellement.setAttribute('key', primaryId());
        return ellement;
    }

    input(type = 'text') {
        const input = this._textInput();
        input.setAttribute('type', type);
        return input;
    }

    div(ellements = []) {
        const div = this._div();
        ellements.forEach(ellement => {
            div.appendChild(ellement);
        });
        return div;
    }

    span(textContent = '') {
        const span = this._span();
        span.textContent = textContent;
        return span;
    }

    _addEventListener(ellement, eventType, handler) {
        ellement.addEventListener(eventType, handler);
    }

    button(text, listener = {}) {
        const button = this._button();
        button.textContent = text;
        if (listener.handler instanceof Function) {
            this._addEventListener(button, listener.eventType, listener.handler);
        }
        return button;
    }

}

export default new UICreator();