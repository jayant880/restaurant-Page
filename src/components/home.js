class Home {
    constructor() {
        this._restaurantName = "The Golden Fork";
        this._testimonials = [
            {
                review: "The Golden Fork is a hidden gem! Their Truffle Pasta is to die for. 5/5 stars!",
                user: "Jessica L."
            },
            {
                review: "Best brunch in town! The Avocado Toast and Mimosas are perfection",
                user: "Mark T."
            },
            {
                review: "I came here every weekend. The service is amazing, and the ambiance is so cozy",
                user: "Priya K."
            }
        ];
        this._hours = `
      <ul>
        <li>Monday - Thursday: 11:00 AM – 10:00 PM</li>
        <li>Friday - Saturday: 11:00 AM – 11:00 PM</li>
        <li>Sunday: 10:00 AM – 9:00 PM (Brunch Specials!)</li>
      </ul>
    `;
        this._address = '123 Fake Street, Foodville, FC 56789';
    }

    createHeader() {
        const title = document.createElement('h1');
        title.textContent = this._restaurantName;
        return title;
    }

    createHeroSection() {
        const heroSection = document.createElement('div');
        heroSection.classList.add('hero-section');

        const heroImage = document.createElement('img');
        heroImage.src = './assets/images/restaurant-interior.jpg'
        heroImage.alt = 'The Golden Fork Restraunt Interior';

        const tagline = document.createElement('p');
        tagline.classList.add('tagline');
        tagline.textContent = 'Fine dining in a casual atmosphere';

        heroSection.appendChild(heroImage);
        heroSection.appendChild(tagline);

        return heroSection;
    }

    createReviews() {
        const reviewSection = document.createElement('div');
        reviewSection.classList.add('review-section');

        const reviewHeader = document.createElement('h2');
        reviewHeader.textContent = 'What Our Customers Say';
        reviewSection.appendChild(reviewHeader);

        const list = document.createElement('ul');
        list.classList.add('testimonial-list');

        this._testimonials.forEach((comment) => {
            const li = document.createElement('li');
            li.classList.add('testimonial-item');

            const commentDiv = document.createElement('div');
            commentDiv.classList.add('review');
            commentDiv.textContent = comment.review;
            li.appendChild(commentDiv);

            const userDiv = document.createElement('div');
            userDiv.classList.add('user');
            userDiv.textContent = comment.user;
            li.appendChild(userDiv);
            list.appendChild(li);
        });

        reviewSection.appendChild(list);
        return reviewSection;
    }


    createHoursSection() {
        const hoursDiv = document.createElement("div");
        hoursDiv.classList.add("hours-section");

        const header = document.createElement("h2");
        header.textContent = "Hours";

        const para = document.createElement("div");
        para.classList.add('hours-content');
        para.innerHTML = this._hours;

        hoursDiv.appendChild(header);
        hoursDiv.appendChild(para);
        return hoursDiv;
    }

    createLocationSection() {
        const location = document.createElement('div');
        location.classList.add('location-section');

        const header = document.createElement("h2");
        header.textContent = "Location";
        location.appendChild(header);

        const address = document.createElement('p');
        address.classList.add('address');
        address.textContent = this._address;

        location.appendChild(address);
        return location;
    }

    render() {
        const homeDiv = document.createElement("div");
        homeDiv.classList.add("home");

        homeDiv.appendChild(this.createHeader());
        homeDiv.appendChild(this.createHeroSection());
        homeDiv.appendChild(this.createReviews());

        const infoContainer = document.createElement('div');
        infoContainer.classList.add('info-container');
        infoContainer.appendChild(this.createHoursSection());
        infoContainer.appendChild(this.createLocationSection());

        homeDiv.appendChild(infoContainer);
        return homeDiv;
    }
}

export default Home;