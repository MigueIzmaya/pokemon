import Item from '../Item/Item.js';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { searchProductsInStock } from '../../utils/fireStoreUtils.js';

const ItemListWidget = () => {

    const [information, setInformation] = useState([]);
    const {idCategory} = useParams();

    useEffect(() => {

        searchProductsInStock(idCategory)
            .then(result => setInformation(result))
            .catch(err => console.log(err));
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