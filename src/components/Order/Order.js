import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../../LocalDb/LocalDb";


const Order = () => {
  const loadedBooks = useLoaderData();
  const books = loadedBooks.books;

  const [cart, setCart] = useState([]);
  
    const storedCart = getStoredData();
  for (const id in storedCart) {
    const initialCart = [];
    const addedBook = books.find(book => book.isbn13 === id);
    initialCart.push(addedBook)
      const newCart = [...cart,...initialCart]
      console.log(newCart)
      // if (addedBook) {
      //   const newCart = [...cart,addedBook]
      //   setCart(newCart);
      // }
    }
  
  
  // console.log(cart)
  return (
    <div>
      <div className="books-container">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <div>
            {/* <h4>{cart.length}</h4> */}
            <p></p>
            <p></p>
          </div>
          <div>
            <button>delete</button>
          </div>
        </div>
      </div>
      <div className="cart-container"></div>
    </div>
  );
};

export default Order;
