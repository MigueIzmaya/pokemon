const Item = (props) => {

    return (
        <>

        <div className="row">
            <div className="card col-4">
                <div className="card-header">
                    {props.title}
                </div>
    
                <div className="card-body">
                    <img src={props.picture} alt={props.title}></img>
                    <h5 className="card-title">{props.picture}</h5>
                    <p className="card-text">{props.price}</p>
                    
                </div>
    
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Ver detalle del producto</a>
                </div>
            </div>
        </div> 
        </>
    );
    
}

export default Item;