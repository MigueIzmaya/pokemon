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
                    id: item.id,
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
        console.log(id);
        setCartList(cartList.filter(item => item.id != id));
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, deleteElement, removeAllElements}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;