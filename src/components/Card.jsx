import { useContext } from 'react';
import CartContext from '../CartContext';
import {AiFillShopping} from 'react-icons/ai';
import {IoShirt} from 'react-icons/io5';
import { v4 as uuid } from 'uuid';

function Card({name, price}){
    const {items, addToCart} = useContext(CartContext);
    return (
        <div className="card">
            <div className="product-box" >
                <IoShirt/>
            </div>            
            <div className="purchase">
                <h3>{name}</h3>
                <button onClick={() => addToCart(name, price)}>
                    <AiFillShopping/>
                </button>

            </div>

            <h4>{price}</h4>

        </div>
    );
}

export default Card;