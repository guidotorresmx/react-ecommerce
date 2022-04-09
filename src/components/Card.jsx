import { useContext } from 'react';
import CartContext from '../CartContext';
import { AiFillShopping } from 'react-icons/ai';
import { FaTshirt } from 'react-icons/fa';
import { FaRedhat } from 'react-icons/fa';    
import { FaSocks } from 'react-icons/fa';    
import { GiMonclerJacket } from "react-icons/gi";
import { GiArmoredPants } from "react-icons/gi";
import { GiConverseShoe } from "react-icons/gi";
import { GiBallerinaShoes } from "react-icons/gi";
import { GiSteeltoeBoots } from "react-icons/gi";

import { v4 as uuid } from 'uuid';

function Card({name, price, sku}) {
    const skuMap = {
        "1": <FaTshirt />, 
        "2": <FaRedhat />, 
        "3": <FaSocks />, 
        "4": <GiMonclerJacket />, 
        "5": <GiArmoredPants />, 
        "6": <GiConverseShoe />, 
        "7": <GiBallerinaShoes />, 
        "8": <GiSteeltoeBoots />
    };
    const {items, addToCart} = useContext(CartContext);
    return (
        <div className="card">
            <div className="product-box" >
                sku: {sku} <br />
                {skuMap[sku]}
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