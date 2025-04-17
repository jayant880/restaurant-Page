class Footer {
    constructor() {
        this._copyrightYear = new Date().getFullYear();
        this._restaurantName = "The Golden Fork";
    }

    render() {
        const footerDiv = document.createElement('div');
        footerDiv.classList.add('footer');

        const copyright = document.createElement('div');
        copyright.classList.add('copyright');
        copyright.textContent = `© ${this._copyrightYear} ${this._restaurantName}. All rights reserved.`;

        const attribution = document.createElement('div');
        attribution.classList.add('attribution');
        attribution.textContent = 'Created with ❤️ by a passionate web developer';

        footerDiv.appendChild(copyright);
        footerDiv.appendChild(attribution);

        return footerDiv;
    }
}

export default Footer;