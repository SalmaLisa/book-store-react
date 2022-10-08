import React from 'react';
import { Link } from 'react-router-dom';
import './Book.css'

const Book = ({ book }) => {
  const { isbn13,image,title,subtitle,price } = book;
  return (
    <Link to={`/books/${isbn13}`} className='single-book'>
      <div>
      <img src={image} alt="" />
      </div>
      <div className='overlay'>
      </div>
      <div className='book-info'>
        <h4 className='font-bold text-xl mb-3'>{title}</h4>
        <i className=' block mb-3'>{subtitle ? subtitle : ''}</i>
        <p>Price :{price}</p>
      </div>
    </Link>
  );
};

export default Book;