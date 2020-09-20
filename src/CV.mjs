import { tSidebar } from './templates/sidebar.mjs';
import { tCascade } from './templates/cascade.mjs';

class CV extends HTMLElement {
    constructor() {
        super();
        this.theme = this.getAttribute('theme');
        this.accentColor = this.getAttribute('accent-color') || 'coral';
        this.attachShadow({ mode: 'open' });
        this.setTheme(this.theme);
        this.containerElement = this.shadowRoot.querySelector('article');
    }

    async connectedCallback() {
        await this._importCVData(this.attributes.uri.value);
        this.attachEventHandlers();
    }

    setTheme(themeName) {
        this.shadowRoot.innerHTML = '';
        const theme = document.createElement('template');
        switch (themeName) {
            case 'sidebar':
                theme.innerHTML = tSidebar(this.accentColor);
                break;
            case 'cascade':
                theme.innerHTML = tCascade(this.accentColor);
                break;

            default:
                break;
        }
        this.shadowRoot.appendChild(theme.content.cloneNode(true));
    }

    attachEventHandlers() {
        this.shadowRoot
            .querySelector('button')
            .addEventListener('click', (e) => {
                if (this.theme === 'sidebar') {
                    this.theme = 'cascade';
                } else {
                    this.theme = 'sidebar';
                }
                this.setTheme(this.theme);
                console.log(this.theme);
                this.attachHeader();
                this.attachBody();
                this.attachMeta();
                this.renderSidebar();
                this.attachEventHandlers();
            });
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
            wrapper.innerHTML = `<h2>${section}</h2>`;
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
            this.shadowRoot.querySelector('main').appendChild(wrapper);
        });
    }

    renderContactInfo(contact) {
        switch (contact.type) {
            case 'email':
                return `<a href="mailto:${contact.value}">${
                    contact.text || contact.value
                }</a>`;
            case 'phone':
            case 'telephone':
                return `<a href="tel:${contact.value}">${
                    contact.text || contact.value
                }</a>`;
            case 'link':
                return `<a href="${contact.value}">${
                    contact.text || contact.value
                }</a>`;
            default:
                return '';
        }
    }

    renderSidebarItem(item) {
        return `
            <div class="sidebar-item">
                <h4>${item.title}</h4>
                <ul>
                    ${item.items.map((i) => `<li>${i}</li>`).join('')}
                </ul>
            </div>     
        `;
    }

    renderSidebar() {
        this.shadowRoot.querySelector('aside.sidebar').innerHTML = `
            ${this.content.sidebar
                .map((item) => this.renderSidebarItem(item))
                .join('')}
        `;
    }

    attachMeta() {
        this.shadowRoot.querySelector('aside.meta').innerHTML = `
            <ul>
                <li>${this.content.meta.date}<li>
                <li>${this.content.meta.location}<li>
                ${this.content.meta.contact
                    .map(
                        (contact) =>
                            `<li>${this.renderContactInfo(contact)}</li>`
                    )
                    .join('')}
            </ul>
        `;
    }

    async _importCVData(cvURI) {
        try {
            const cvData = await fetch(cvURI);
            this.content = await cvData.json();
            this.attachHeader();
            this.attachBody();
            this.attachMeta();
            this.renderSidebar();
            console.log(this.content);
        } catch (err) {
            console.error(err);
            this.containerElement.innerHTML = `<pre class="failed">Error: ${err}</pre>`;
        }
    }
}

window.customElements.define('web-cv', CV);

export { CV };
