import { useContext, useEffect } from "react";
import { CartContext } from "../CartContext/CartContext";

const Cart = () => {

    const test = useContext(CartContext);

    return(
        <div className="container-fluid product-scroll mb-3">

        {
            test.cartList.map(product => 
                
                
                        <div className="row mb-3">
                            <div className="col-md-6 col-4">
                                <picture className="position-relative">
                                    <img src={product.picture} className="img-fluid img-thumbnail mini" alt="TOY STORY" />
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                                    1                       
                                    </span>
                                </picture>                      
                            </div>
            
                            <div className="col-md-3 col-4">
                                <label className="form-label">{product.title}</label>
                            </div>
            
                            <div className="col-md-3 col-4">
                                <label className="form-label">{product.price}</label>
                            </div>
                        </div>            
            )

        }
        </div>
    );

}

export default Cart;