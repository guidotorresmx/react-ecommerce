import Card from "../components/Card";
import { v4 as uuid } from 'uuid';
import React from "react";


function Products() {
    const products = [
        {name: "T-Shirt", price: "20", sku: "1"},
        {name: "Hat", price: "30", sku: "2"},
        {name: "Socks", price: "40", sku: "3"},
        {name: "Jacket", price: "50", sku: "4"},
        {name: "Pants", price: "60", sku: "5"},
        {name: "Shoes", price: "70", sku: "6"},
        {name: "Flats", price: "80", sku: "7"},
        {name: "Boots", price: "90", sku: "8"},
    ];


    return (
        <div className="product-list">
            {React.Children.toArray(products.map((product) => (
                <Card name={product.name} price={product.price} sku={product.sku} />
            )))}
        </div>
    );
}

export default Products;

