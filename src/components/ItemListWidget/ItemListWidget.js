import Item from '../Item/Item.js';
import { useEffect, useState } from 'react';
import { searchProductsInStock } from '../../utils/Utils.js';
import { useParams } from 'react-router-dom';
const {productsData} = require('../../utils/productsData');

const ItemListWidget = () => {

    const [information, setInformation] = useState([]);
    const {idCategory} = useParams();

    useEffect(() => {
        searchProductsInStock(2000, productsData.filter(item => 
            idCategory === undefined ? item : item.category === idCategory
        ))
            .then(result => setInformation(result))
            .catch(error => console.log(error))
    }, [idCategory]);


    return (
        <>
            <div className='row pb-5'>
                {            
                    information.map(item => <Item title={item.title} picture={item.picture} price={item.price} description={item.description} id={item.id}></Item>)
                }
            </div>        
        </>
    );
    
}

export default ItemListWidget;