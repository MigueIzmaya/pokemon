import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, count) => {

        let itemFound = cartList.find(product => product.idItem === item.id);

        if (itemFound === undefined){
            setCartList(
                [...cartList, 
                {
                    picture: item.picture,
                    title: item.title,
                    price: item.price,
                    countProducts: count

                }]);

        } else {
            itemFound.countProducts+= count;
        }
        
    }

    const removeAllElements = () => {
        setCartList([]);
    }

    const deleteElement = (id) => {
        setCartList(cartList.filter(item => item.idItem != id));
    }

    return(
        <CartContext.Provider value={{cartList, addToCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;