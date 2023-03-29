import React from 'react';

const PaginationUp = ({
  currentPage, onPageChange, totalItems, itemsPerPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className='flex flex-row justify-center  bg-greydark py-5'>
      <nav>
        <ul className='pagination flex flex-row gap-x-2'>
          <li> pagination up</li>
          <li>
            <button
              className='custom-pagination-button'
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
                className={`custom-pagination-button ${number === currentPage && 'bg-gray-900 '}`}
                onClick={() => onPageChange(number)}
                type='button'
              >
                {number}
              </button>
            </li>
          ))}
          <li>
            <button
              className='custom-pagination-button'
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              type='button'
            >
              Next
            </button>
            <button
              className='custom-pagination-button'
              onClick={() => onPageChange(currentPage + 2)}
              disabled={currentPage === totalPages}
              type='button'
            >
              Next + 2
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PaginationUp;
