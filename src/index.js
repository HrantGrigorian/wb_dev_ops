import './styles/styles.scss';

const app = {
    state: {
        introText: 'Welcome to the modern web development HELL',
        part_1: {
            description: 'From zero to-front-end hero',
            url: 'https://medium.com/russian/%D0%BE%D1%82-%D0%BD%D1%83%D0%BB%D1%8F-%D0%B4%D0%BE-%D0%B3%D0%B5%D1%80%D0%BE%D1%8F-front-enda-%D1%87%D0%B0%D1%81%D1%82%D1%8C-1-f524d668f328'
        },
        part_2: {
            description: 'From zero to-front-end hero part 2',
            url: 'https://medium.com/russian/%D0%BE%D1%82-%D0%BD%D1%83%D0%BB%D1%8F-%D0%B4%D0%BE-%D0%B3%D0%B5%D1%80%D0%BE%D1%8F-%D1%84%D1%80%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D0%B4%D0%B0-%D1%87%D0%B0%D1%81%D1%82%D1%8C-2-25f19e56eb29'
        }
    },
    rootElement: document.getElementById('root'),
    intro: function() {
        const introduction = document.createElement('div');
        introduction.classList.add('intro');
    
        const introText = document.createElement('span');
        introText.textContent = this.state.introText;

        introduction.append(
            introText,
            this.createLink(this.state.part_1),
            this.createLink(this.state.part_2)
        );
        this.rootElement.appendChild(introduction);
    },
    createLink: function({ url, description } = {}) {
        const link = document.createElement('a');
        if (!url || !description) {
            console.log('Please specify url and description');
            return link;
        }
        link.textContent = description;
        link.href = url;
        return link;
    }
};

app.intro();