class Menu {
    constructor() {
        this._title = "Our Menu";
        this._listOfAppetizers = [
            {
                name: "Crispy Calamari",
                description: "Light fried, served with spicy aioli",
                price: "$12.99",
                image: "./assets/images/menu-items/calamari.jpg"
            },
            {
                name: "Truffle Fries",
                description: "Hand-cut fries with truffle oil and parmesan.",
                price: "$9.99",
                image: "./assets/images/menu-items/truffle-fries.jpg"
            },
            {
                name: "Bruschetta Trio",
                description: "Tomato, pesto, and mushroom variations",
                price: "$10.99",
                image: "./assets/images/menu-items/bruschetta.jpg"
            }
        ];
        this._listOfMainCourses = [
            {
                name: "Golden Fork Burger",
                description: "Angus beef, caramelized onions, truffle mayo.",
                price: "$18.99",
                image: "./assets/images/menu-items/burger.jpg"
            },
            {
                name: "Miso-Glazed Salmon",
                description: "With jasmine rice & sautéed greens.",
                price: "$24.99",
                image: "./assets/images/menu-items/salmon.jpg"
            },
            {
                name: "Mushroom Risotto",
                description: "Creamy Arborio rice with wild mushrooms.",
                price: "$19.99",
                image: "./assets/images/menu-items/risotto.jpg"
            }
        ];
        this._listOfBeverages = [
            {
                name: "Berry Bliss",
                description: "Mixed berries, mint, soda.",
                price: "$6.99",
                image: "./assets/images/menu-items/berry-drink.jpg"
            },
            {
                name: "Tropical Fizz",
                description: "Pineapple, coconut, lime.",
                price: "$6.99",
                image: "./assets/images/menu-items/tropical-drink.jpg"
            },
            {
                name: "Golden Mule",
                description: "Vodka, ginger beer, lime.",
                price: "$12.99",
                image: "./assets/images/menu-items/mule-drink.jpg"
            }
        ];
        this._listOfDesserts = [
            {
                name: "Chocolate Lava Cake",
                description: "With vanilla ice cream.",
                price: "$8.99",
                image: "./assets/images/menu-items/lava-cake.jpg"
            },
            {
                name: "Tiramisu",
                description: "Classic Italian dessert.",
                price: "$7.99",
                image: "./assets/images/menu-items/tiramisu.jpg"
            },
            {
                name: "Crème Brûlée",
                description: "Rich vanilla custard with caramelized sugar.",
                price: "$8.99",
                image: "./assets/images/menu-items/creme-brulee.jpg"
            }
        ];
    }
    createHeader(title) {
        const h1Element = document.createElement('h1');
        h1Element.textContent = title || this._title;
        return h1Element;
    }

    createMenuItem(item) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('menu-item');

        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.name;
        imageContainer.appendChild(image);

        const textContainer = document.createElement('div')
        textContainer.classList.add('menu-item-text');

        const topRow = document.createElement('div');
        topRow.classList.add('menu-item-header');

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('span');
        itemPrice.classList.add('price');
        itemPrice.textContent = item.price;

        topRow.appendChild(itemName);
        topRow.appendChild(itemPrice);

        const description = document.createElement('div');
        description.classList.add('description');
        description.textContent = item.description;

        textContainer.appendChild(topRow);
        textContainer.appendChild(description);

        menuItem.appendChild(imageContainer);
        menuItem.appendChild(textContainer);

        return menuItem;
    }

    createMenuSection(title, items) {
        const section = document.createElement('div')
        section.classList.add('menu-section');

        const sectionHeader = document.createElement('h2');
        sectionHeader.textContent = title;
        section.appendChild(sectionHeader);

        const itemContainer = document.createElement('div');
        itemContainer.classList.add('menu-item-container');

        items.forEach(item => {
            itemContainer.appendChild(this.createMenuItem(item));
        });

        section.appendChild(itemContainer);
        return section;
    }

    render() {
        const menuDiv = document.createElement("div");
        menuDiv.classList.add("menu");

        menuDiv.appendChild(this.createHeader());
        menuDiv.appendChild(this.createMenuSection('Appetizers', this._listOfAppetizers));
        menuDiv.appendChild(this.createMenuSection('Main Courses', this._listOfMainCourses));
        menuDiv.appendChild(this.createMenuSection('Beverages', this._listOfBeverages));
        menuDiv.appendChild(this.createMenuSection('Desserts', this._listOfDesserts));

        return menuDiv;
    }
}

export default Menu;