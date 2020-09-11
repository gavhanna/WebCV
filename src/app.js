require('./components/header');

class CV {
    constructor(cvURI, parentElement = 'body') {
        this.parentElement = parentElement;
        this._importCVData(cvURI);
        this.el = {};
        this.el.container = document.createElement('div');
    }
    async _importCVData(cvURI) {
        try {
            const cvData = await fetch(cvURI);
            this.content = await cvData.json();
            this.render();
        } catch (err) {
            console.error(err);
        }
    }

    _generateHeader() {
        const cvHeader = document.createElement('cv-header');
        cvHeader.data = this.content.title;
        return cvHeader;
    }

    _generateHTML() {
        this.el.container.appendChild(this._generateHeader());
    }

    render() {
        this.el.container.innerHTML = '';
        this._generateHTML();
        document
            .querySelector(this.parentElement)
            .appendChild(this.el.container);
    }
}

const cv = new CV('/cv.json');
console.log(cv);
