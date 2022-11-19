import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToLocalDb } from '../../LocalDb/LocalDb';

const BookDetails = () => {
  const selectedBook = useLoaderData();
  const {isbn13, title, authors, image, pages, publisher, rating, year, url, desc, price } = selectedBook;
  
  const orderABook= id => {
    addToLocalDb(id); 
  }
  
  return (
    <div className='book-details grid grid-cols-2 w-4/5 ml-28 mt-[-20px] px-10'>
      <div>
        <img className='w-full' src={image} alt="" />
      </div>
      <div className='flex items-center '>
        <div>
        <small className='bg-teal-400 font-semibold py-1 px-3 rounded-2xl'>BRAND NEW</small>
        <h1 className='text-3xl font-bold my-2'>{title}</h1>
        <p className=' text-slate-700 my-2'>Total Pages : {pages}</p>
        <p className=' text-slate-700 my-2'>Author : {authors}</p>
        <p className=' text-slate-700 my-2'>Publisher : {publisher}</p>
        <p className=' text-slate-700 my-2'>Published : {year}</p>
        <p className=' text-teal-400 my-2'>Price : {price}</p>
        <p className=' text-slate-700 my-2 text-justify'> {desc}</p>
        <div className='mt-14'>
          <a className='bg-teal-400 text-white py-3 px-5 rounded-md text-xl ' href={url} target='_blank' rel="noreferrer">DownLoad PDF </a>
            <button onClick={()=>orderABook(isbn13)}>
            <Link className='bg-teal-400 text-white py-3 px-16 rounded-md text-xl ml-10' >Order</Link>
          </button>
       </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;