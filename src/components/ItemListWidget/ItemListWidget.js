import Item from '../Item/Item.js';

const ItemListWidget = () => {

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

    let is_stock = true;

    let products = (timeout, task) => {
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

    return (
        <>
        {/*
            ))*/
            
            data.map(item => products()
                             .then(() => 
                                products(2000, <Item title={item.title} picture={item.picture} price={item.price}> </Item>)))
            }
        </>
    );
    
}

export default ItemListWidget;