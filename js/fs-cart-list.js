 
localStorage.setItem("cart", JSON.stringify(coursesList));

function getCart() {
    const storedCart = localStorage.getItem("cart");
    const initialState = {
        cart: [],
        cartTotal: 0,
        currency: "USD",
    };

    return storedCart ? JSON.parte(storedCart) : initialState;
}

getCart();