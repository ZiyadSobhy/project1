import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ id, name, price }) => {
  return (
    <li key={id}>
      <Link to={`/products/${id}`}>
        {name} - ${price}
      </Link>
    </li>
  );
}

export default Product;
