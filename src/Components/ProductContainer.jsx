import React, { useState } from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProductContainer = () => {
  const initialProducts = [
    { id: 1, name: 'Product A', price: 20 },
    { id: 2, name: 'Product B', price: 35 },
    { id: 3, name: 'Product Z', price: 25 },
    { id: 4, name: 'Product G', price: 10 },
    // Add more products as needed
  ];

  const [products, setProducts] = useState(initialProducts);
  const [sortBy, setSortBy] = useState("sort");

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    // Implement the sorting logic based on the selected criterion
    const sortedProducts = [...products].sort((a, b) => {
      if (sortBy === 'low to high') {
        return b.price - a.price;
      } else if (sortBy === 'a-z') {
        return b.name.localeCompare(a.name);
      }else if (sortBy === "z-a"){
        return a.name.localeCompare(b.name)
      }else if (sortBy === "high to low"){
        return a.price - b.price;
      }
      // Add more sorting options as needed
  });

    setProducts(sortedProducts);
  };

  return (
    <div>
      <label>
        Sort by:
        {/* <button>Sort</button> */}
        <select value={sortBy} onChange={handleSortChange}>
          <option value="">Sort</option>
          <option value="low to high">low to high</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
          <option value="high to low">high to low</option>
          {/* Add more sorting options as needed */}
        </select>
      </label>
      <ProductList products={products} />
    </div>
  );
};

export default ProductContainer;
