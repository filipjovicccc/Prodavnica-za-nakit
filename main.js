const cartB = document.querySelector(".cart-btn");

const closeCartB = document.querySelector(".close-cart");

const clearCartB = document.querySelector(".clear-cart");

const cartDOM = document.querySelector(".cart");

const cartCover = document.querySelector(".-cart-overlay");

const cartItems = document.querySelector(".cart-items");

const cartTotal = document.querySelector(".cart-total");

const cartContent = document.querySelector(".cart-content");

const productsDOM = document.querySelector
    (".products-center");

let cart = [];   //glavni cart gde ce se ispisivati

class Products {       //klasa preko koje cemo dobijati producte, //prvo preko jsona pa preko stranice
    async getProducts() {
        try {
            let res = await fetch('products.json');
            let data = await res.json();
            let products = data.items;
            products = products.map(item => {
                const { title, price } = item.fields;
                const { id } = item.sys;
                const image = item.fields.image.fields.file.url;
                return { title, price, id, image }
            })
            return products;
        } catch (error) {
            console.log(error)

        }

    }
}

class Detskop {            //klasa koja ce prikazivati na stranici
    displayProducts(products) {
        let result = " ";
        products.forEach(product => {
            result += `
            <article class="product">
            <div class="img-container">
                <img src=${product.image
                } alt="product" class="product-img">
                <button class="bag-btn" data-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i>
                    add to bag

                </button>
            </div>
            <h3>${product.title}</h3>    
            <h4>${product.price}</h4>  
        </article>

            `;

        });     //dinamicko ispisivanje

        productsDOM.innerHTML = result;
    }
    getButtons() {
        const btns = document.querySelectorAll(".bag-btn");



        btns.forEach(button => {
            let id = button.dataset.id;





        });

    }
};

class Storage {              //klasu kojom cemo da se bavimo sa local storigom

    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products))
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const ui = new Detskop()
    const products = new Products();


    products.getProducts().then(products => {
        ui.displayProducts(products);
        Storage.saveProducts(products);
    }).then(() => {

        ui.getButtons();
    });

});

