import Card from "../components/Card";
import { v4 as uuid } from 'uuid';


function Products() {
    const products = [
        {name: "T-Shirt", price: "20", key: "1"},
        {name: "Pants", price: "30", key: "2"},
        {name: "Shoes", price: "40", key: "3"},
        {name: "Hat", price: "50", key: "4"},
        {name: "Socks", price: "60", key: "5"},
        {name: "Jacket", price: "70", key: "6"},
        {name: "Shirt", price: "80", key: "7"},
        {name: "Pants", price: "90", key: "8"},
    ];


    return (
        <div className="product-list">
            {products.map((product) => (
                <Card name={product.name} price={product.price} key={product.key}/>
            ))}
        </div>
    );
}

export default Products;

