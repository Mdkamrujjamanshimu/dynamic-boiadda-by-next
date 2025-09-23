const CartReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, product, amount } = action.payload;

      //   CHECK CART IS PRODUCT ESIXT OR NOT
      let existingProduct = state.cart.find((item: any) => item.id === id);

      if (existingProduct) {
        // IF EXIST JUST UPDATE QUANTITY
        let updateCart = state.cart.map((item: any) => {
          if (item.id === id) {
            let newAmount = item.amount + amount;
            // NEVER INCREASE FROM STOCK
            if (newAmount > product.stock) {
              newAmount = product.stock;
            }

            return {
              ...item,
              amount: newAmount,
            };
          } else {
            return item;
          }
        });

        return { ...state, cart: updateCart };
      } else {
        // IF NEW JUST ADD THE PRODUCT TO CART
        let newItem = {
          id: id,
          name: product.name,
          image: product.image,
          price: product.regularPrice,
          discount: product.discountPercent,
          stock: product.stock,
          amount,
        };

        return {
          ...state,
          cart: [...state.cart, newItem],
        };
      }
    }

    case "REMOVE_ITEM": {
      let updatedCart = state.cart.filter(
        (curElem: any) => curElem.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }

    case "INCREMENT": {
      let updatedCart = state.cart.map((curElem: any) => {
        if (curElem.id === action.payload) {
          let newAmount = curElem.amount + 1;
          if (newAmount > curElem.stock) {
            newAmount = curElem.stock;
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        }
        return curElem;
      });
      return {
        ...state,
        cart: updatedCart,
      };
    }

    case "DECREMENT": {
      let updatedCart = state.cart.map((curElem: any) => {
        if (curElem.id === action.payload) {
          let newAmount = curElem.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...curElem, amount: newAmount };
        }
        return curElem;
      });
      return {
        ...state,
        cart: updatedCart,
      };
    }

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    //!  CART TOTAL ITEM
    case "CART_TOTAL_ITEM": {
      let total_item = state.cart.reduce(
        (acc: any, curElem: any) => acc + curElem.amount,
        0
      );
      return {
        ...state,
        total_item,
      };
    }

    //!  CART TOTAL PRICE
    case "CART_TOTAL_PRICE": {
      let { total_price, discounted_price } = state.cart.reduce(
        (acc: any, curElem: any) => {
          let itemTotal = curElem.price * curElem.amount;
          let itemDiscounted = Math.round(
            (curElem.price - (curElem.price * curElem.discount) / 100) *
              curElem.amount
          );
          acc.total_price += itemTotal;
          acc.discounted_price += itemDiscounted;
          return acc;
        },
        { total_price: 0, discounted_price: 0 }
      );
      return {
        ...state,
        total_price,
        discounted_price,
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
