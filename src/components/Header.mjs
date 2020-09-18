const template = document.createElement('template');
template.innerHTML = `
    <style>
        h1 {
            color: coral;
        }
    </style>

    <header>
        <h1></h1>
        <p></p>
    </header>
`;

class Header extends HTMLElement {
    constructor(data) {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    _renderName() {
        this.shadowRoot.querySelector('h1').innerText = `${
            this.data.firstName
        } ${
            this.data.middleName
                ? this.data.middleName + ' ' + this.data.lastName
                : this.data.lastName
        }`;
    }

    connectedCallback() {
        if (this.data) {
            this._renderName();
            this.shadowRoot.querySelector(
                'p'
            ).innerText = this.data.description;
        }
    }
}

window.customElements.define('cv-header', Header);

export { Header };
