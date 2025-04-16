class Home {
    constructor() {
        this._restrauntName = "The Golden Fork";
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
        title.textContent = this._restrauntName;
        return title;
    }

    createReviews() {
        const list = document.createElement('ul');
        this._testimonials.forEach((comment) => {
            const li = document.createElement('li');

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
        return list;
    }


    createHoursSection() {
        const hoursDiv = document.createElement("div");
        hoursDiv.classList.add("hours");

        const header = document.createElement("h2");
        header.textContent = "Hours";

        const para = document.createElement("div");
        para.innerHTML = this._hours;

        hoursDiv.appendChild(header);
        hoursDiv.appendChild(para);
        return hoursDiv;
    }

    createLocationSection() {
        const location = document.createElement('div');
        location.classList.add('location');

        const header = document.createElement("h2");
        header.textContent = "Location";
        location.appendChild(header);

        const address = document.createElement('p');
        address.textContent = this._address;

        location.appendChild(address);
        return location;
    }

    render() {
        const homeDiv = document.createElement("div");
        homeDiv.classList.add("home");

        homeDiv.appendChild(this.createHeader());
        homeDiv.appendChild(this.createReviews());
        homeDiv.appendChild(this.createHoursSection());
        homeDiv.appendChild(this.createLocationSection());
        return homeDiv;
    }
}

export default Home;