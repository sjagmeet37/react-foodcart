import CartContext from "./cart-context";

const CartProvider = (props) => {

    const addItemToCartHandler = (item) => {

    }

    const removerCartItemHandler = id => {

    }

    const cartContext = {
        items : [],
        totalAmount : 0,
        addItem : addItemToCartHandler,
        removeElement : removerCartItemHandler
    };

    return (<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>);
}

export default CartProvider;