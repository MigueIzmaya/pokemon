import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { collection, increment, serverTimestamp, setDoc, updateDoc, doc } from "firebase/firestore";
import db from "../../utils/firebaseConfig";


const Cart = () => {

    const currentContext = useContext(CartContext);

    const createOrder = () => {
        currentContext.cartList.forEach(async (item) => {
          const itemRef = doc(db, "products", item.id);
    
          await updateDoc(itemRef, {
            stock: increment(-item.countProducts),
          });
        });
    
        let order = {
          buyer: {
            name: "Miguel Izmaya",
            phone: "5522448899",
            email: "miguelizmaya@gmail.com",
          },
          date: serverTimestamp(),
          items: currentContext.cartList.map((item) => ({
            id: item.id,
            price: item.price,
            title: item.title,
            countProducts: item.countProducts,
          })),
          total: currentContext.calculateTotal(),
        };
    
        const createOrderInFirestore = async (order) => {

            console.log(order);
          const newOrderRef = doc(collection(db, "orders"));
    
          await setDoc(newOrderRef, order);
    
          return newOrderRef;
        };
    
        createOrderInFirestore(order)
          .then((result) => alert("Tu orden ha sido creada con éxito. "))
          .catch((error) => console.log(error));
    
        currentContext.removeAllElements();
      };

    return(

        <>

            {
                currentContext.calculateTotalItems() > 0 && (

                    <div className="container mb-5">
                        <div className="row">
                            <div className="offset-md-8">
                                <a href="#" className="btn btn-danger" onClick={() => currentContext.removeAllElements()}>Eliminar todos los productos</a>                    
                            </div>
                        </div>
                    </div>


                )

            }

            <div className="container-fluid product-scroll mb-3">

                {
                    currentContext.calculateTotalItems() > 0 ?
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
                        :
                        (
                            <div className="row">
                                    <div className="col-md-8 col-8">
                                        <h3> Su carrito está vacío</h3>

                                    </div>
                            </div>
                        )
                }

                {
                    currentContext.calculateTotalItems() > 0 && (<div className="row">
                        <div className="offset-md-8 offset-8">
                            <h4>Resumen de Compra</h4>
                        </div>

                        <div className="offset-md-8 offset-8">
                            <p>Número total de productos: {currentContext.calculateTotalItems()}</p>
                        </div>

                        <div className="offset-md-8 offset-8">
                            <p>Subtotal: {currentContext.calculateSubTotal()}</p>
                        </div>

                        <div className="offset-md-8 offset-8">
                            <p>IVA: {currentContext.calculateTaxes()}</p>
                        </div>

                        <div className="offset-md-8 offset-8">
                            <p>Total: {currentContext.calculateTotal()}</p>
                        </div>
                    </div>)
                }

                {
                     currentContext.calculateTotalItems() > 0 && (
                        <Link to='/'><a href="#" className="btn btn-primary" onClick={createOrder}>Finalizar y Comprar</a></Link>

                     )
                }

            </div>
        </>
    );

}

export default Cart;