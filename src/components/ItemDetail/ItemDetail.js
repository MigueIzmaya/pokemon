import ItemCount from '../ItemCount/ItemCount.js';

const ItemDetail = ({item}) => {

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
                    <ItemCount stock="5" initial="1"></ItemCount>                    
                </div>
    
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Agregar al carrito</a>
                </div>
            </div>
        </div> 
        </>
    );
    
}

export default ItemDetail;