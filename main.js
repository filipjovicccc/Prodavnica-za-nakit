

const closeCartB = document.querySelector(".close-cart");

const clearCartB = document.querySelector(".clear-cart");

const cartDOM = document.querySelector(".cart");

const cartB = document.querySelector(".cart-button");

const cartCover = document.querySelector(".cart-overlay");

const cartItems = document.querySelector(".cart-items");
console.log(cartItems)

const cartTotal = document.querySelector(".cart-total");

const cartContent = document.querySelector(".cart-content");

const productsDOM = document.querySelector
    (".products-center");

const imageSize = document.querySelector(".im")

let cart = [];   //glavni cart gde ce se ispisivati


let btnsDOM = [];


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
                add to cart
    
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


        const btns = [...document.querySelectorAll(".bag-btn")];

        btnsDOM = btns;


        btns.forEach(button => {
            let id = button.dataset.id;
            let inCart = cart.find(item => item.id === id);

            if (inCart) {
                button.innerText = "In Cart";
                button.disable = true;

            }

            button.addEventListener("click", (event) => {
                event.target.innerText = "In Cart";

                event.target.disabled = true;

                let cartItem = {
                    ...Storage.getProduct(id),
                    amount: 1
                };

                cart = [...cart, cartItem];

                Storage.saveCart(cart)

                this.setCartValues(cart);

                this.addCartItem(cartItem);

                this.showCart()

            })


        });

    }
    setCartValues(cart) {
        let tempTotal = 0;
        let itemsTotal = 0;

        cart.map(item => {
            tempTotal += item.price * item.amount;
            itemsTotal += item.amount
        })
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2))

        cartItems.innerText = itemsTotal;

    }
    addCartItem(item) {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = ` <img src=${item.image} alt="product"/>

        <div>
            <h4>${item.title}</h4>
            <h5>${item.price}</h5>
            <span class="remove-item" data-id=
            ${item.id}> remove</span>
        </div>
        <div>
            <i class="fas fa-sort-up"data-id=${item.id} ></i>
            <p class="item-amount">${item.amount}</p>
            <i class="fas fa-sort-down" data-id=${item.id}></i>
        </div>`;
        cartContent.appendChild(div);
        console.log(cartContent);


    };

    showCart() {
        cartCover.classList.add('transparentBg');

        cartDOM.classList.add('showCart');

    }
    setup() {
        cart = Storage.getCart(); // za ucitavanje aplikacije na kranu da li je vec nesto bilo u cartu
        this.setCartValues(cart);
        this.populateCart(cart);
        cartB.addEventListener("click", this.showCart);
        closeCartB.addEventListener("click",
            this.hideCart);
    }

    populateCart(cart) {
        cart.forEach(item => this.addCartItem(item));

    }
    hideCart() {
        cartCover.classList.remove('transparentBg');

        cartDOM.classList.remove('showCart');
    }

    cartLogic() {
        clearCartB.addEventListener("click", () => {
            this.clearCart();
        });
        cartContent.addEventListener("click", event => {
            if (event.target.classList.contains("remove-item")) {

                let removeItem = event.target;

                let id = removeItem.dataset.id;
                cartContent.removeChild
                    (removeItem.parentElement.parentElement)

                this.removeItem(id)
            }

            else if (event.target.classList.contains("fa-sort-up")) {

                let addAmount = event.target;
                let id = addAmount.dataset.id;
                let tempItem = cart.find(item => item.id === id);

                tempItem.amount = tempItem.amount + 1;  //sabiramo amount da bi strelica isla na gore i dodavalo amount

                Storage.saveCart(cart);
                this.setCartValues(cart);

                addAmount.nextElementSibling.innerText =

                    tempItem.amount;

            }
            else if (event.target.classList.contains("fa-sort-down")) {
                let lowerAmount = event.target;
                let id = lowerAmount.dataset.id;
                let tempItem = cart.find(item => item.id === id);

                tempItem.amount = tempItem.amount - 1;

                if (tempItem.amount > 0) {
                    Storage.saveCart(cart);
                    this.setCartValues(cart);
                    lowerAmount.previousElementSibling.innerText =
                        tempItem.amount;
                }
                else {
                    cartContent.removeChild(lowerAmount.parentElement.parentElement);
                    this.removeItem(id)                //ako bude 0 da se skloni sa carta

                }

            }

        })
    }
    clearCart() {
        let cartItems = cart.map(item => item.id);
        cartItems.forEach(id => this.removeItem(id));
        console.log(cartContent.children)

        while (cartContent.children.length > 0) {
            cartContent.removeChild(cartContent.children[0]);
        }
        this.hideCart();

    }

    removeItem(id) {
        cart = cart.filter(item => item.id !== id);
        this.setCartValues(cart);
        Storage.saveCart(cart);
        let button = this.getSingleButton(id);
        button.disabled = false;
        button.innerHTML = `<i class="fas 
        fa-shopping-cart"></i>add to cart`  //resetujemo dakle na addtoo cart

    }
    getSingleButton(id) {
        return btnsDOM.find(button => button.dataset.id
            === id);  //da resetujem dugmice koje su cartovali nesto

    }
}



class Storage {              //klasu kojom cemo da se bavimo sa local storigom

    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify
            (products));
    }

    static getProduct(id) {
        let products = JSON.parse(localStorage.getItem
            ('products'));
        return products.find(product => product.id === id)
    }

    static saveCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    static getCart() {

        return localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem('cart'))
            : [];

    }

}



document.addEventListener("DOMContentLoaded", () => {

    const ui = new Detskop()
    const products = new Products();

    ui.setup();


    products
        .getProducts()
        .then(products => {
            ui.displayProducts(products);
            Storage.saveProducts(products);
        })
        .then(() => {

            ui.getButtons();

            ui.cartLogic();
        });

});
