import './styles/styles.scss';
import IncrementComponent from './app/login';

const app = {
    components: {},
    state: {
        introText: 'Welcome to the modern web development HELL'
    },
    rootElement: document.getElementById('root'),
    intro: function() {
        this.components.login = new IncrementComponent(this.rootElement);
    }
};

app.intro();
