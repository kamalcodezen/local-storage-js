

const addNumberToLs = () => {
    const number = Math.ceil(Math.random() * 100);
    localStorage.setItem("number", number);
    console.log(number)

}
const getNumberToLs = () => {
    const number = localStorage.getItem("number");
    console.log("number", number)

}

const setObjectItem = () => {
    const customer = { name: "kamal", age: 20 }
    const customerJson = JSON.stringify(customer)
    localStorage.setItem("customer", customerJson)

}

const getObjectItem = () => {

    const customerJson = localStorage.getItem("customer")
    const customer = JSON.parse(customerJson)
    console.log(customer.name)

}

console.log(`-------------------------`)


const mainAllProduct = () => {
    const productEl = document.getElementById("product");
    const quantityEl = document.getElementById("quantity");

    const product = productEl.value;
    const quantity = parseInt(quantityEl.value);

    displayProduct(product, quantity);
    addToProduct(product, quantity);

    productEl.value = "";
    quantityEl.value = "";
}



const getCart = () => {
    let cart = {};
    let cartJson = localStorage.getItem("cart")
    console.log(cartJson)
    if (cartJson) {
        cart = JSON.parse(cartJson)
    }
    return cart;
}

const addToProduct = (product, quantity) => {
    let cart = getCart();

    if (cart[product]) {
        cart[product] = cart[product] + quantity;
    } else {
        cart[product] = quantity;
    }


    console.log("cart", cart);
    const item = JSON.stringify(cart)
    localStorage.setItem("cart", item);

}




const displayProduct = (product, quantity) => {

    const li = document.createElement("li")
    li.innerText = `${product} : ${quantity}`

    // get div and append
    const productList = document.getElementById("product-list");
    productList.append(li)

}






const displayAllProduct = () => {
    const cart = getCart();
    for (let item in cart) {
        const itemAll = cart[item]
        console.log(item, itemAll);
        displayProduct(item, itemAll);
    }

}


displayAllProduct()