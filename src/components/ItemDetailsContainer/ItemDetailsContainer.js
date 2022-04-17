import ItemDetail from '../ItemDetail/ItemDetail.js';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchProductsInStock } from '../../utils/Utils.js';
const {productsData} = require('../../utils/productsData');

const ItemDetailsContainer = () => {

    const [information, setInformation] = useState([]);
    const {idItem} = useParams();

    console.log(idItem);

    useEffect(() => {
        searchProductsInStock(2000, productsData.filter(item => item.id === parseInt(idItem)))
            .then(result => setInformation(result))
            //.then(result => console.log(result))
            .catch(error => console.log(error))
    }, [idItem]);
    
    return (
        <>
            {information.map(item => <ItemDetail item={item}> </ItemDetail>)}       
        </>
    );    
}

export default ItemDetailsContainer;