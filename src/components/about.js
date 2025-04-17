class About {
    constructor() {
        this._phone = "(555) 123-4567";
        this._email = "info@goldenfork.com";
        this._website = "www.goldenfork.com";
        this._socialMedia = "@GoldenForkEats";
        this._storyText = `
            The Golden Fork was established in 2015 by Chef Michael Chen, 
            who wanted to create a dining experience that combined global flavors 
            with locally-sourced ingredients. After years of working in high-end 
            restaurants across Europe and Asia, Chef Chen returned to his hometown 
            to share his culinary vision with the community.
            
            Our restaurant prides itself on sustainable practices, working closely 
            with local farmers and producers to ensure the freshest, highest-quality 
            ingredients for every dish we serve.
        `;
    }

    createContactSection() {
        const contactDiv = document.createElement('div');
        contactDiv.classList.add('contact-section');

        const header = document.createElement('h2');
        header.textContent = "Contact Us";
        contactDiv.appendChild(header);

        const infoContainer = document.createElement('div');
        infoContainer.classList.add('contact-info');

        const phoneDiv = document.createElement('div');
        phoneDiv.innerHTML = `<strong>Phone:</strong> ${this._phone}`;

        const emailDiv = document.createElement('div');
        emailDiv.innerHTML = `<strong>Email:</strong> ${this._email}`;

        const websiteDiv = document.createElement('div');
        websiteDiv.innerHTML = `<strong>Website:</strong> <a href="https://${this._website}">${this._website}</a>`;

        const socialDiv = document.createElement('div');
        socialDiv.innerHTML = `<strong>Social Media:</strong> ${this._socialMedia}`;

        infoContainer.appendChild(phoneDiv);
        infoContainer.appendChild(emailDiv);
        infoContainer.appendChild(websiteDiv);
        infoContainer.appendChild(socialDiv);

        contactDiv.appendChild(infoContainer);
        return contactDiv;
    }

    createStorySection() {
        const storyDiv = document.createElement('div');
        storyDiv.classList.add('story-section');

        const header = document.createElement('h2');
        header.textContent = "Our Story";
        storyDiv.appendChild(header);

        const storyImg = document.createElement('img');
        storyImg.src = './assets/images/chef.jpg';
        storyImg.alt = 'Chef Michael Chen';
        storyImg.classList.add('chef-image');
        storyDiv.appendChild(storyImg);

        const storyText = document.createElement('p');
        storyText.textContent = this._storyText;
        storyDiv.appendChild(storyText);

        return storyDiv;
    }

    render() {
        const aboutDiv = document.createElement('div');
        aboutDiv.classList.add('about-page');

        const h1Element = document.createElement('h1');
        h1Element.textContent = "About Us";
        aboutDiv.appendChild(h1Element);

        aboutDiv.appendChild(this.createStorySection());
        aboutDiv.appendChild(this.createContactSection());

        return aboutDiv;
    }
}

export default About;