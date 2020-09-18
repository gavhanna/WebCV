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
        this.containerElement = this.shadowRoot.querySelector('article');
        this.containerElement.innerHTML =
            '<div class="loader">Loading...</div>';
    }

    async connectedCallback() {
        await this._importCVData(this.attributes.uri.value);
    }

    attachHeader() {
        const header = document.createElement('cv-header');
        header.data = this.content.title;
        this.shadowRoot.querySelector('article').appendChild(header);
    }

    attachBody() {
        const body = document.createElement('cv-body');
        body.data = this.content.body;
        this.shadowRoot.querySelector('article').appendChild(body);
    }

    async _importCVData(cvURI) {
        try {
            const cvData = await fetch(cvURI);
            this.content = await cvData.json();
            this.containerElement.innerHTML = '';
            this.attachHeader();
            this.attachBody();
            console.log(this.content);
        } catch (err) {
            console.error(err);
            this.containerElement.innerHTML = `<div class="failed">Error: ${err}</div>`;
        }
    }
}

window.customElements.define('web-cv', CV);

export { CV };
