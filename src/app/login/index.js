import UICreator from '../helpers/UICreator';

export default class IncrementComponent {
    constructor(parentElement) {
        this.state = {
            clickCount: 0
        };
        this.wrapper = document.createElement('div');
        parentElement.appendChild(this.wrapper);
        this.render();
    }

    setState(newState) {
        this.state = {
            ...this.state,
            ...newState
        };
        this.update();
    }

    update() {
        this.ellement.remove();
        this.render();
    }

    increment() {
        this.setState({
            'clickCount': this.state.clickCount + 1
        });
    }

    decrement() {
        this.setState({
            'clickCount': this.state.clickCount - 1
        });
    }

    render() {
        this.ellement = UICreator.div([
            UICreator.button('+', {
                eventType: 'click',
                handler: this.increment.bind(this)
            }),
            UICreator.button('-', {
                eventType: 'click',
                handler: this.decrement.bind(this)
            }),
            UICreator.span(this.state.clickCount)
        ]);

        this.wrapper.appendChild(this.ellement);
    }
}