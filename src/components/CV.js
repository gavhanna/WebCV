require('./Header');

const template = document.createElement('template');
template.innerHTML = `
    <article>
        
    </article>
`;

class CV extends HTMLElement {
    constructor(cvURI, parentElement = 'body') {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        console.log(this.attributes.uri.value);
    }

    async connectedCallback() {
        await this._importCVData(this.attributes.uri.value);
    }

    attachHeader() {
        const header = document.createElement('cv-header');
        header.data = this.content.title;
        this.shadowRoot.querySelector('article').appendChild(header);
    }
    
    async _importCVData(cvURI) {
        try {
            const cvData = await fetch(cvURI);
            this.content = await cvData.json();
            this.attachHeader();
            console.log(this.content);
        } catch (err) {
            console.error(err);
        }
    }
}

window.customElements.define('web-cv', CV);
