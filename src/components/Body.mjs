const template = document.createElement('template');
template.innerHTML = `
    <style>
        section {
            color: #353535;
            font-family: Helvetica, Arial, sans-serif;
        }
        
        h2, h3 {
            text-transform: capitalize;
            font-family: "Time New Roman", serif;
        }

        h3 > span {
            font-weight: normal;
            font-style: italic;
        }

        aside {
            font-size: 14px;
        }
    </style>

    <section></section>
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
            ${d.content
                .map((c) => {
                    return `<li><strong>${c.item}</strong> - ${c.description}</li>`;
                })
                .join('')}
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
        this.data.forEach((item) => {
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
            this.container.appendChild(wrapper);
        });
    }

    _addAccentColor() {
        this.shadowRoot.querySelectorAll('h2').forEach((el) => {
            el.style.color = this.getAttribute('accent-color');
        });
    }

    connectedCallback() {
        if (this.data) {
            console.log(this.data);
            this._renderBody();
            this._addAccentColor();
        }
    }
}

window.customElements.define('cv-body', Body);

export { Body };
