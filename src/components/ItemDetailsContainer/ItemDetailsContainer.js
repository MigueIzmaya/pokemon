import ItemDetail from '../ItemDetail/ItemDetail.js';
import { useEffect, useState } from 'react';


const ItemDetailsContainer = () => {

    const [information, setInformation] = useState([]);

    useEffect(() => {

        let is_stock = true;

        const data = [
            {
                id: 1,
                title: "Charizard",
                picture: "https://tcgplayer-cdn.tcgplayer.com/product/250320_200w.jpg",
                description: "Classic Collection (Pokemon)",
                placeholder: "Charizard",
                price: "$50"
    
            },
            {
                id: 2,
                title: "Celebi (3)",
                picture: "https://tcgplayer-cdn.tcgplayer.com/product/84141_200w.jpg",
                description: "Neo Revelation (Pokemon) ",
                placeholder: "Celebi (3)",
                price: "$75"
            },
            {
                id: 3,
                title: "Snorlax (Secret)",
                picture: "https://tcgplayer-cdn.tcgplayer.com/product/241875_200w.jpg",
                description: "SWSH06: Chilling Reign (Pokemon)",
                placeholder: "Snorlax (Secret)",
                price: "$80"
            },
            {
                id: 4,
                title: "Shining Gyarados",
                picture: "https://tcgplayer-cdn.tcgplayer.com/product/89164_200w.jpg",
                description: "Neo Revelation (Pokemon) ",
                placeholder: "Shining Gyarados",
                price: "$90"
            },
            {
                id: 5,
                title: "Pichu",
                picture: "https://tcgplayer-cdn.tcgplayer.com/product/88011_200w.jpg",
                description: "Neo Genesis (Pokemon)",
                placeholder: "Pichu",
                price: "$95"
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
            <div className='row pb-5'>
                {            
                    information.map(item => <ItemDetail title={item.title} picture={item.picture} price={item.price} description={item.description}> </ItemDetail>)
                }
            </div>        
        </>
    );
    
}

export default ItemDetailsContainer;