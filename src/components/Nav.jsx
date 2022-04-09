import {Link} from 'react-router-dom';
import CartContext from '../CartContext';
import { useContext } from 'react';
import {AiFillShopping} from 'react-icons/ai';

function Nav(){
    const {items} = useContext(CartContext);

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Products</Link>
                </li>
                <li>
                    <Link to="/checkout">
                        <div className="cart">
                            <AiFillShopping />
                            <span>{items.length}</span>
                        </div>
                    </Link>
                    
                </li>

            </ul>
        </nav>
    );
}

export default Nav;