import React, {useState} from "react";
import './styles.css';


const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if(count < stock) {
            setCount(count+1);
        } else {
            alert("No hay suficiente stock disponible");
        }
    }

    const handleDecrement = () => {
        if (count > 1) {
            setCount (count-1);
        } else {
            alert("No hay stock");
        }
    }
    
    const addCart = () => {
        onAdd(count);
        setCount(initial);
    }

    return (
    <div>
        <button onClick={handleDecrement}>-</button>
        <h2>{count}</h2>
        <button onClick={handleAdd}>+</button>
        <button onClick={addCart}>Agregar al carrito</button>
    </div>
    );
};

export default ItemCount;