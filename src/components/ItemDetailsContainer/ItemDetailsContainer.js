import ItemDetail from '../ItemDetail/ItemDetail.js';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchProductByIdItem } from '../../utils/fireStoreUtils.js';

const ItemDetailsContainer = () => {

    const [information, setInformation] = useState([]);
    const {idItem} = useParams();

    useEffect(() => {
        
        searchProductByIdItem(idItem)
            .then((result) => setInformation(result))
            .catch((error) => console.log(error));
    }, []);
    
    return (
        <>
            {<ItemDetail item={information}> </ItemDetail>}       
        </>
    );    
}

export default ItemDetailsContainer;