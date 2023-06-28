import React, { useState, useEffect } from 'react';
import { ALLPRODUCTS } from '../allproduct';
import { AllProduct } from './allproduct';

export const Allshoppingpage = () => {
  const [filteredProducts, setFilteredProducts] = useState(ALLPRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedPrice, setSelectedPrice] = useState('All Prices');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(8); // Number of initially visible products

  const filterByCategory = (category) => {
    if (category === 'All Categories') {
      setFilteredProducts(ALLPRODUCTS);
    } else {
      const filtered = ALLPRODUCTS.filter((product) => {
        return product.category === category;
      });
      setFilteredProducts(filtered);
    }
    setSelectedCategory(category);
    setShowCategoryDropdown(false);
  };

  const filterByPriceRange = (minPrice, maxPrice) => {
    let filtered;

    if (maxPrice === '200+') {
      filtered = ALLPRODUCTS.filter((product) => {
        return product.productPrice >= minPrice;
      });
    } else {
      filtered = ALLPRODUCTS.filter((product) => {
        return product.productPrice >= minPrice && product.productPrice <= maxPrice;
      });
    }

    setFilteredProducts(filtered);
    setSelectedPrice(`${minPrice}-${maxPrice}`);
    setShowPriceDropdown(false);
  };

  const toggleCategoryDropdown = () => {
    setShowCategoryDropdown((prevShowDropdown) => !prevShowDropdown);
    setShowPriceDropdown(false);
  };

  const togglePriceDropdown = () => {
    setShowPriceDropdown((prevShowDropdown) => !prevShowDropdown);
    setShowCategoryDropdown(false);
  };

  const showMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8); // Increase the number of visible products
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="shop container mt-5">
      <div className="shopTitle d-flex justify-content-center">
        <h1 className="tittle-product-cards">SHOP</h1>
      </div>
      <div
        className="dropdown-container d-flex gap-2 mt-5 justify-content-center"
        style={{ border: '2px solid #E3E5E5', boxShadow: '0px 8px 23px 0px #506B5221', borderRadius: '8px' }}
      >
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleCategoryDropdown}>
            {selectedCategory}
          </button>
          {showCategoryDropdown && (
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item" onClick={() => filterByCategory('All Categories')}>
                  All Categories
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => filterByCategory('Flowers')}>
                  Flowers
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => filterByCategory('Plumbs')}>
                  Plumbs
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => filterByCategory('Gifts')}>
                  Gifts
                </button>
              </li>
            </ul>
          )}
        </div>
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={togglePriceDropdown}>
            Price Range: ${selectedPrice}
          </button>
          {showPriceDropdown && (
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item" onClick={() => filterByPriceRange(0, 50)}>
                  0-50
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => filterByPriceRange(50, 100)}>
                  50-100
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => filterByPriceRange(100, 200)}>
                  100-200
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => filterByPriceRange(200, Infinity)}>
                  200+
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="products row mt-5 g-3 mb-5">
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <AllProduct data={product} key={product.id} />
        ))}
      </div>
      {visibleProducts < filteredProducts.length && ( // Show the "Show More" button if there are more products to display
        <div className="text-center mt-4">
          <button className="btn btn-success mb-5" onClick={showMoreProducts}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
};
