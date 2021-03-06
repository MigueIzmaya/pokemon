import ItemCount from '../ItemCount/ItemCount.js';
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../CartContext/CartContext.js';

const ItemDetail = ({item}) => {

    const [itemCount, setItemCount] = useState(0);

    const currentContext = useContext(CartContext);

    const onAdd = (eve) => {
        alert("Has seleccionado " + eve + " items.");
        setItemCount(eve);
        currentContext.addToCart(item, eve);
    };

    return (
        <>

        <div className="col-12 col-sm-12 col-md-12 col-lg-4 pb-5 d-flex justify-content-center">
            <div className="card">
                <div className="card-header">
                    {item.title}
                </div>
    
                <div className="card-body">
                    <img src={item.picture} alt={item.title}></img>
                    <h5 className="card-title">{item.description}</h5>
                    <p className="card-text">{item.price}</p>

                    {
                        itemCount === 0 ?
                        <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}></ItemCount>
                        : <Link to='/cart'><a href="#" className="btn btn-primary">Terminar mi compra</a></Link>
                        
                    }
                                       
                </div>
            </div>
        </div> 
        </>
    );
    
}

export default ItemDetail;