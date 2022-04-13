import Item from '../Item/Item.js';
import { useEffect, useState } from 'react';


const ItemListWidget = () => {

    const [information, setInformation] = useState([]);

    useEffect(() => {

        let is_stock = true;

        const data = [
            {
                id: 1,
                title: "Ultra Ball",
                picture: "",
                price: "$50"
    
            },
            {
                id: 1,
                title: "Double Turbo Energy",
                picture: "",
                price: "$75"
            }
        ]

        let getProducts = (data) => {
            return data;
        }

        let queryProducts = (timeout, task) => {
            return new Promise((resolve, reject) => {
                if (is_stock) {
                    setTimeout(() => {
                        resolve(task)
                    }, timeout);
                } else {
                    reject("Error")
                }
            })
        }

        queryProducts(2000, getProducts(data))
            .then(response => setInformation(response))
            .catch(err => console.log(err))  


    }, []);
    

    return (
        <>
        {            
            information.map(item => <Item title={item.title} picture={item.picture} price={item.price}> </Item>)
        }
        </>
    );
    
}

export default ItemListWidget;