const template = document.createElement('template');
template.innerHTML = `
    <style>
        section {
            color: #353535;
        }
    </style>

    <section>
    </section>
`;

class Body extends HTMLElement {
    constructor(data) {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.container = this.shadowRoot.querySelector('section');
    }

    _paragraph(d) {
        return `<p>${d.content}</p>`;
    }

    _list(d) {
        return `<ul>
            ${d.content.map((c) => {
                return `<li><strong>${c.item}</strong> - ${c.description}</li>`;
            })}
        </ul>`;
    }

    _renderHTMLBlock(data) {
        switch (data.type) {
            case 'p':
                return this._paragraph(data);
            case 'ul':
                return this._list(data);
            default:
                return '';
        }
    }

    _renderBody() {
        const { experience } = this.data;
        experience &&
            experience.forEach((exp) => {
                const div = document.createElement('div');
                div.innerHTML = `
                    <h3>${exp.title} - ${exp.company}, ${exp.location}</h3>
                    <aside>${exp.date.start} - ${
                    exp.date.end || 'PRESENT'
                }</aside>
                <div class="body-copy">
                    ${exp.body.map((b) => this._renderHTMLBlock(b)).join('')}
                </div>
                `;
                this.container.appendChild(div);
            });
    }

    connectedCallback() {
        if (this.data) {
            console.log(this.data);
            this._renderBody();
        }
    }
}

window.customElements.define('cv-body', Body);
