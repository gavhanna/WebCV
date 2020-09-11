(async () => {
    class CV {
        constructor(cvURI) {
            this._initCV(cvURI);
            this.el = {};
            this.el.container = document.createElement('div');
            document.querySelector('body').appendChild(this.el.container);
        }

        async _initCV(cvURI) {
            try {
                const cvData = await fetch(cvURI);
                this.content = await cvData.json();
            } catch (err) {
                console.error(err);
            }
        }
    }

    const cv = new CV('/cv.json');
    console.log(cv);
})();
