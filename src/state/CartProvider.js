import { useReducer } from "react";
import CartContext from "./cart-context";

const cartDefaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItem;
    let updatedItems;

    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE_ITEM") {
    
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );


    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItem;
    let updatedItems;

    const updatedTotalAmount = state.totalAmount - existingCartItem.price;


    if (existingCartItem) {
      if(existingCartItem.amount === 1) {
        updatedItems = state.items.filter(item => item.id !== action.id);        
      } else {
        updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  }

  return cartDefaultState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    cartDefaultState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removerCartItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeElement: removerCartItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
