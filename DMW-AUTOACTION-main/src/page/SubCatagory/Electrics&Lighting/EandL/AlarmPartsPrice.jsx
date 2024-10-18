import React from 'react';




const BrakeParts = () => {
  const products = [
    {
      name: 'Alarms, Immobilisers & Horns Parts',
      price: '₹1,017.00',
      originalPrice: '₹1,287.00',
      discount: '21%',
      imageUrl: 'https://www.selectusedparts.com/assets/images/sub-category-image/1651556566-Alarms-,-Immobilisers-and-Horns.png',
      link: '',
    },
  
  ];

  return (
    
      
      <section className="product-section">
        <h2>Alarms, Immobilisers & Horns Parts</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
            <a href={product.link}>
              <img src={product.imageUrl} alt={product.name} />
              </a>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
                <p className="original-price">MRP: <s>{product.originalPrice}</s></p>
                <p className="discount">{product.discount} OFF</p>
               
              </div>
            </div>
          ))}
        </div>
      </section>
      
    
  );
};

export default BrakeParts;