import { Link } from "react-router-dom";

const Item = (props) => {

    return (
        <>

        <div className="col-12 col-sm-12 col-md-12 col-lg-4 pb-5 d-flex justify-content-center">
            <div className="card">
                <div className="card-header">
                    {props.title}
                </div>
    
                <div className="card-body">
                    <img src={props.picture} alt={props.title}></img>
                    <h5 className="card-title">{props.description}</h5>
                    <p className="card-text">{props.price}</p>
                    
                </div>

                {
                    props.stock > 0 ? 
                        <div className="card-footer">
                            <Link to={`/item/${props.id}`}> <a href="#" className="btn btn-primary">Ver detalle del producto</a></Link>
                        </div>
                    :
                        <div className="card-footer">
                            <a href="#" className="btn btn-danger disabled">No disponible</a>
                        </div>

                }
    
                
            </div>
        </div> 
        </>
    );
    
}

export default Item;