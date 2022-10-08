import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BookDetails = () => {
  const selectedBook = useLoaderData();
  const { title, authors, image, pages, publisher, rating, year, url, desc } = selectedBook;
  console.log(selectedBook)
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
        <p className=' text-slate-700 my-2 text-justify'> {desc}</p>
        <div className='mt-14'>
          <a className='bg-teal-400 text-white py-3 px-5 rounded-md text-xl ' href={url} target='_blank' rel="noreferrer">DownLoad PDF </a>
          <Link className='bg-teal-400 text-white py-3 px-16 rounded-md text-xl ml-10' to='/order'>Order</Link>
       </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;