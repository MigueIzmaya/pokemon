import { useContext, useEffect } from "react";
import { CartContext } from "../CartContext/CartContext";

const Cart = () => {

    const currentContext = useContext(CartContext);

    return(
        <div className="container-fluid product-scroll mb-3">

            {console.log(currentContext.cartList)}
        {

            currentContext.cartList.map(product => 
                
                
                <div className="row">
                    <div className="col-md-8 col-8">
                        <div className="row mb-3">
                            <div className="col-md-4 col-4">
                                <picture>
                                    <img src={product.picture} className="img-fluid img-thumbnail mini" alt="TOY STORY" />
                                </picture>                      
                            </div>

                            <div className="col-md-2 col-2">
                                <label className="form-label">{product.title}</label>
                            </div>
                
                            <div className="col-md-3 col-3">
                                <label className="form-label">{product.countProducts}</label>
                            </div>
                
                            <div className="col-md-3 col-3">
                                <label className="form-label">{product.price}</label>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-4">
                        <a href="#" className="btn btn-danger" onClick={() => currentContext.deleteElement(product.id)}>Eliminar Producto</a>                    
                    </div>
                </div>
                                    
            )

        }
        </div>
    );

}

export default Cart;