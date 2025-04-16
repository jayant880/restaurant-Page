class Menu {
    constructor() {
        this._title = "Menu";
        this._listOfAppitizers = [
            {
                name: "Crispy Calamari",
                description: "Light fried, served with spicy aioli"
            },
            {
                name: "Truffle Fries",
                description: "Hand-cut fries with truffles oil and parmesan."
            },
            {
                name: "Bruschetta Trio ",
                description: "Tomato, pesto, and mushroom variations"
            }
        ];
        this._listOfMainCorses = [
            {
                name: "Golden Fork Burger",
                description: "Angus beef, caramelized onions, truffle mayo."
            },
            {
                name: "Miso-Glazed Salmon ",
                description: "With jasmine rice & sautéed greens."
            },
            {
                name: "Mushroom Risotto ",
                description: "Creamy Arborio rice with wild mushrooms."
            }
        ];
        this._listOfBevrages = [
            {
                name: "Berry Bliss",
                description: "Mixed berries, mint, soda."
            },
            {
                name: "Tropical Fizz",
                description: "Pineapple, coconut, lime."
            },
            {
                name: "Golden Mule",
                description: "Vodka, ginger beer, lime."
            }
        ];
        this._listOfDesserts = [
            {
                name: "Chocolate Lava Cake",
                description: "With vanilla ice cream."
            },
            {
                name: "Tiramisu",
                description: "Classic Italian dessert."
            },
            {
                name: "Crème Brûlée",
                description: "Rich vanilla custard with caramelized sugar."
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
        menuItem.innerHTML = `
                <h3>${item.name}</h3>
                <div class="description">${item.description}</div>
            `;
        return menuItem;
    }

    createAppitizers() {
        const appitizers = document.createElement('div');

        appitizers.appendChild(this.createHeader('Appitizers'));

        const appitizerDiv = document.createElement('div');

        this._listOfAppitizers.forEach((snack) => {
            appitizerDiv.appendChild(this.createMenuItem(snack));
        });

        appitizers.appendChild(appitizerDiv);
        return appitizers;
    }
    createMainCorses() {
        const mainCourse = document.createElement('div');

        mainCourse.appendChild(this.createHeader('Main Course'));

        const mainCourseDiv = document.createElement('div');
        this._listOfMainCorses.forEach((food) => {
            mainCourseDiv.appendChild(this.createMenuItem(food));
        });

        mainCourse.appendChild(mainCourseDiv);
        return mainCourse;
    }
    createBevrages() {
        const bevrages = document.createElement('div');
        bevrages.appendChild(this.createHeader("Bevrages"));
        const bevrageDiv = document.createElement('div');
        this._listOfBevrages.forEach(drink => {
            bevrageDiv.appendChild(this.createMenuItem(drink));
        })
        bevrages.appendChild(bevrageDiv);
        return bevrages;
    }
    createDesserts() {
        const dessert = document.createElement('div');
        dessert.appendChild(this.createHeader("Desserts"));
        const dessertDiv = document.createElement('div');
        this._listOfDesserts.forEach(drink => {
            dessertDiv.appendChild(this.createMenuItem(drink));
        })
        dessert.appendChild(dessertDiv);
        return dessert;
    }

    render() {
        const menuDiv = document.createElement("div");
        menuDiv.classList.add("menu");

        menuDiv.appendChild(this.createHeader());
        menuDiv.appendChild(this.createAppitizers());
        menuDiv.appendChild(this.createMainCorses());
        menuDiv.appendChild(this.createBevrages());
        menuDiv.appendChild(this.createDesserts());
        return menuDiv;
    }
}

export default Menu;