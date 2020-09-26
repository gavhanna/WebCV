import { tSidebar } from './templates/sidebar.mjs';
import { tCascade } from './templates/cascade.mjs';
import { themes } from './utils/constants.mjs';

class CV extends HTMLElement {
    constructor() {
        super();
        this.theme = this.getAttribute('theme');
        this.accentColor = this.getAttribute('accent-color') || 'coral';
        this.showMenu =
            this.getAttribute('show-menu') === 'true' ? true : false;
        this.attachShadow({ mode: 'open' });
        this.setTheme(this.theme);
        this.containerElement = this.shadowRoot.querySelector('article');
    }

    async connectedCallback() {
        await this._importCVData(this.attributes.uri.value);
        console.log(this.containerElement);
    }

    setTheme(themeName) {
        this.theme = themeName;
        this.shadowRoot.innerHTML = '';
        const theme = document.createElement('template');
        switch (themeName) {
            case themes.SIDEBAR:
                theme.innerHTML = tSidebar(this.accentColor);
                break;
            case themes.CASCADE:
                theme.innerHTML = tCascade(this.accentColor);
                break;

            default:
                break;
        }
        this.shadowRoot.appendChild(theme.content.cloneNode(true));
    }

    selectTheme(e) {
        const target = e.path[0];
        if (target.nodeName === 'LI') {
            this.setTheme(target.getAttribute('data-theme'));
            this.renderAll();
        }
    }

    attachEventHandlers() {
        this.shadowRoot
            .querySelector('div.theme-selector')
            ?.addEventListener('click', (e) => {
                this.selectTheme(e);
            });

        this.showMenu &&
            this.shadowRoot
                .querySelector('#btn-print')
                .addEventListener('click', () => {
                    this.printCV();
                });
    }

    attachHeader() {
        const {
            firstName,
            middleName,
            lastName,
            description,
            role,
        } = this.content.title;
        this.shadowRoot.querySelector('header h1').innerHTML = `${firstName} ${
            middleName && middleName + ' '
        }${lastName}`;
        this.shadowRoot.querySelector('header p').innerHTML = `${description}`;
    }

    bodyParagraph(d) {
        return `<p>${d.content}</p>`;
    }

    bodyList(d) {
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

    renderMenu() {
        const menuContainer = document.createElement('div');
        const printBtn = document.createElement('button');
        const themeSelector = document.createElement('div');
        menuContainer.id = 'menu';
        printBtn.id = 'btn-print';
        printBtn.innerText = 'Print PDF';
        themeSelector.innerHTML = `
            <span>Theme &#8691;</span>
            <ul>
                ${Object.entries(themes)
                    .map(
                        (t) =>
                            `<li data-theme="${t[1]}" class="${
                                this.theme === t[1] ? 'active' : ''
                            }">${t[1]}</li>`
                    )
                    .join('')}
            </ul>
        `;
        themeSelector.classList.add('theme-selector');
        menuContainer.appendChild(themeSelector);
        menuContainer.appendChild(printBtn);
        this.shadowRoot.querySelector('article').appendChild(menuContainer);
    }

    renderHTMLBlock(data) {
        switch (data.type) {
            case 'p':
                return this.bodyParagraph(data);
            case 'ul':
                return this.bodyList(data);
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
                        ${exp.body.map((b) => this.renderHTMLBlock(b)).join('')}
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

    renderAll() {
        this.attachHeader();
        this.attachBody();
        this.attachMeta();
        this.renderSidebar();
        this.showMenu && this.renderMenu();
        this.attachEventHandlers();
    }

    async _importCVData(cvURI) {
        try {
            const cvData = await fetch(cvURI);
            this.content = await cvData.json();
            this.renderAll();
            console.log(this.content);
        } catch (err) {
            console.error(err);
            this.containerElement.innerHTML = `<pre class="failed">Error: ${err}</pre>`;
        }
    }

    printCV() {
        const PDF = window.open('', 'PRINT', 'height=800,width=1200');

        PDF.document.write('<html><head><title>' + document.title + '</title>');
        PDF.document.write('</head><body>');
        PDF.document.write(this.shadowRoot.innerHTML);
        PDF.document.write('</body></html>');

        PDF.document.close(); // necessary for IE >= 10
        PDF.focus(); // necessary for IE >= 10

        PDF.print();
        setTimeout(() => {
            // Delay the closing of the new window by one frame
            // Otherwise the window closes too soon and the
            // print dialog disapears!
            PDF.close();
        }, 1);
    }
}

window.customElements.define('web-cv', CV);

export { CV };
