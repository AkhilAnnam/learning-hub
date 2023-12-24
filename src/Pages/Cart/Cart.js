import React, { useEffect, useState } from 'react';
import './Cart.css';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import { MdDelete } from 'react-icons/md';

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  const handleDeleteItemToCart = (item) => {
    console.log(item, item?._id);
    axios.delete(`http://localhost:3001/deleteItem/${item?._id}`).then(() => {
      alert('The product has been deleted successfully!');
      axios
        .get('http://localhost:3001/cart')
        .then((res) => setCartProducts(res.data))
        .catch((err) => console.log(err));
    });
  };

  useEffect(() => {
    axios
      .get('http://localhost:3001/cart')
      .then((res) => setCartProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(cartProducts);
  return (
    <>
      <div className='arts-page'>
        <div className='arts-heading'>
          <h2>Cart</h2>
        </div>

        <div className='arts'>
          {cartProducts.map((item) => (
            <div className='arts-lists' key={item?.item?.ID}>
              <div className='arts-card'>
                <img
                  src={item?.item?.Image}
                  alt=''
                  className='cart-arts-img '
                />
                <MdDelete
                  onClick={() => handleDeleteItemToCart(item)}
                  className={'arts-card-cart'}
                />
              </div>
              <div className='arts-card-content'>
                <h1 className='arts-name'>{item?.item?.Name}</h1>
                <div className='displayStack__1'>
                  <div className='arts-price'>${item?.item?.Price}</div>
                  <div className='arts-sales'>
                    {item?.item?.TotalSales} units sold
                  </div>
                </div>
                <div className='displayStack__2'>
                  <div className='arts-rating'>
                    {Array.from({ length: item?.item?.Rating }).map(
                      (_, index) => (
                        <FaStar key={index} />
                      )
                    )}
                  </div>
                  <div className='arts-time'>
                    {item?.item?.TimeLeft} days left
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;