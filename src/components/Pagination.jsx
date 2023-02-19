import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  console.log('currentPage, totalPages', currentPage, totalPages);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  console.log('pageNumbers', pageNumbers);

  return (
    <div className='flex flex-row justify-center my-6'>
      <nav>
        <ul className='pagination flex flex-row gap-x-2'>
          <li className={`${currentPage === 1 ? 'hidden' : ''}`}>
            <button
              className='px-3 py-1 rounded-md bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-300 disabled:opacity-50'
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              type='button'
            >
              Previous
            </button>
          </li>

          {pageNumbers.map((number) => (
            <li key={number} className={`${currentPage === number ? 'active' : ''}`}>
              <button
                className='px-3 py-1 rounded-md bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-300'
                onClick={() => onPageChange(number)}
                type='button'
              >
                {number}
              </button>
            </li>
          ))}

          <li className={`${currentPage === totalPages ? 'hidden' : ''}`}>
            <button
              className='px-3 py-1 rounded-md bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-300 disabled:opacity-50'
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              type='button'
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
