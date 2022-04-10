import './ItemCount.css'
import { useState } from 'react';

const ItemCount = (props) => {

    const [count, setCount] = useState(0);

    let initial = props.initial;
    let stock = props.stock;

    const increment = () => {
        console.log(initial);
        if (count < stock){
            setCount(count + 1);
        }
    }

    const decrement = () => {
        console.log(initial);
        if(count > initial){
            setCount(count - 1);
        }
    }

    const updateValue = (e) =>{
        setCount(e.target.value);
    }

    return(
    <>
    <div className="center">
        <div className="input-group">
            <span className="input-group-btn">
                <button type="button" className="btn btn-danger btn-number"  data-type="minus" onClick={decrement}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16" >
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                </button>
            </span>
            <input type="text" name="quant[1]" className="form-control input-number" value={count} onChange={updateValue} />
            <span className="input-group-btn">
                <button type="button" className="btn btn-success btn-number" data-type="plus" onClick={increment}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </button>
            </span>
        </div>
    </div>
    
    </>);

}

export default ItemCount;