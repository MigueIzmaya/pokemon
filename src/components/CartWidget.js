import carrito from './carrito.png';

const CartWidget = () => {

    return (
        <div className="CartWidget">
                                <form className="d-flex">
                        <picture className="position-relative">
                            <img src="{require('./carrito.png')}" className="img-fluid img-thumbnail logo" alt="Shopping Cart"></img>
                            <span id="shoppingCartCounter" className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">                       
                            5
                            </span>
                        </picture>     
                    </form>
        </div>
    );
    
}

export default CartWidget;