import { templateStr } from './template.mjs';

const template = document.createElement('template');
template.innerHTML = templateStr;

class CV extends HTMLElement {
    constructor(cvURI, parentElement = 'body') {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.containerElement = this.shadowRoot.querySelector('article');
        this.accentColor = this.getAttribute('accent-color') || 'coral';
    }

    async connectedCallback() {
        await this._importCVData(this.attributes.uri.value);
    }

    attachHeader() {
        const {
            firstName,
            middleName,
            lastName,
            description,
            role,
            date,
        } = this.content.title;
        this.shadowRoot.querySelector('header h1').innerHTML = `${firstName} ${
            middleName && middleName + ' '
        }${lastName}`;
        this.shadowRoot.querySelector('header p').innerHTML = `${description}`;
    }

    _bodyParagraph(d) {
        return `<p>${d.content}</p>`;
    }

    _bodyList(d) {
        return `
            <ul>
                ${d.content
                    .map((c) => {
                        return `<li><strong>${c.item}</strong> - ${c.description}</li>`;
                    })
                    .join('')}
            </ul>
        `;
    }

    _renderHTMLBlock(data) {
        switch (data.type) {
            case 'p':
                return this._bodyParagraph(data);
            case 'ul':
                return this._bodyList(data);
            default:
                return '';
        }
    }

    attachBody() {
        this.content.body.forEach((item) => {
            const { section, items } = item;
            const wrapper = document.createElement('section');
            wrapper.innerHTML = `<h2 style="color: ${this.accentColor}">${section}</h2>`;
            items.forEach((exp) => {
                const div = document.createElement('div');
                div.innerHTML = `
                        <h3>${exp.title} - <span>${exp.subtitle}</span></h3>
                        <aside>${exp.date.start} - ${
                    exp.date.end || 'PRESENT'
                }</aside>
                    <div class="body-copy">
                        ${exp.body
                            .map((b) => this._renderHTMLBlock(b))
                            .join('')}
                    </div>
                    `;
                wrapper.appendChild(div);
            });
            this.shadowRoot.querySelector('article').appendChild(wrapper);
        });
    }

    async _importCVData(cvURI) {
        try {
            const cvData = await fetch(cvURI);
            this.content = await cvData.json();
            this.attachHeader();
            this.attachBody();
        } catch (err) {
            console.error(err);
            this.containerElement.innerHTML = `<pre class="failed">Error: ${err}</pre>`;
        }
    }
}

window.customElements.define('web-cv', CV);

export { CV };
