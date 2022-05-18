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

    const calculateTotalItems = () => {
		let countProductsMap = cartList.map((item) => item.countProducts);
		return countProductsMap.reduce(
			(previousValue, currentValue) => previousValue + currentValue, 0);
	};

    const calculateTotalPrice = (idItem) => {
        let index = cartList.map((item) => item.idItem).indexOf(idItem);
    
        return parseInt((cartList[index].price * cartList[index].countProducts).toFixed(2));
      };

    const calculateSubTotal = () => {
       let totalPerProduct = cartList.map((item) => calculateTotalPrice(item.idItem));
    
       return totalPerProduct.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    };

    const calculateTaxes = () => {
        let Taxes = calculateSubTotal() * 0.10;
    
        return Taxes.toFixed(2);
    };

    const calculateTotal = () => {
       return parseInt(calculateSubTotal()) + parseInt(calculateTaxes());
    };

    return(
        <CartContext.Provider value={{cartList, 
                                      addToCart, 
                                      deleteElement, 
                                      removeAllElements,
                                      calculateTotalItems,
                                      calculateTotalPrice, 
                                      calculateSubTotal,
                                      calculateTaxes,
                                      calculateTotal}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;