import {useContext } from 'react';
import CartContext from '../CartContext';
import { v4 as uuid } from 'uuid';

function Checkout(){
    const {items} = useContext(CartContext);

    return (
        <>
            <h1>Checkout</h1>

            <div className="shopping-bag">   

                {items.map((item) => (
                    <div key={uuid}>
                        <h3>{item.name}</h3>
                        <h4>{item.price}</h4>
                    </div>
                ))} 
            </div>

        </>
    );
}


export default Checkout;