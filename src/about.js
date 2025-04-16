class About {
    constructor() {
        this._phone = "(555) 123-456";
        this._email = "info@goldenfork.com";
        this._website = "www.goldenfork.com";
        this._socialMedia = "@GoldenForkEats";
        this._about = `
                <div class="info">
            <div>Phone : ${this._phone}</div>
            <div>Email : ${this._email}</div>
            <div>WebSite : <a href="#">${this._website}</a></div>
            <div>Social Media : ${this._socialMedia}</div>
        </div>`;
    }

    render() {
        const about = document.createElement('div');

        const h1Element = document.createElement('h1');
        h1Element.textContent = "Contact us";
        about.appendChild(h1Element);
        const aboutDiv = document.createElement('div');
        aboutDiv.innerHTML = this._about;
        about.appendChild(aboutDiv);
        return about;
    }
}

export default About;