import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FaSearch } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { setVideosQuery, resetVideoType } from '../store/slices/videosSlice'

const Header = () => {
  const [querySearch, setQuerySearch] = useState('')
  const dispatch = useDispatch();
  // const search = useSelector((state) => state.videos.search);

  const searchQueryHandler = (e) => {
    e.preventDefault()
    if (querySearch === '') return
    dispatch(setVideosQuery({ search: querySearch }));
  };

  const handlerDelete = () => {
    dispatch(resetVideoType())
    setQuerySearch('')
  };

  return (
    <div className='sticky top-0 z-10 flex  justify-center h-14 px-4 items-center bg-customdark custom-border '>
      <div className='flex h-8 md:h-10 md:ml-10 md:pl-5 border custom-border rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0'>
        <input
          type='text'
          className='bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]'
          value={querySearch}
          onChange={(e) => setQuerySearch(e.target.value)}
          onKeyUp={(e) => (e.key === 'Enter' ? searchQueryHandler(e) : null)}
          placeholder='Search'
        />
      </div>
      <button
        className='w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 custom-border  bg-white/[0.1] text-white'
        onClick={searchQueryHandler}
        type='button'
      >
        <FaSearch />
      </button>
      <button
        className='w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 custom-border rounded-r-3xl bg-white/[0.1] text-white'
        onClick={handlerDelete}
        type='button'
      >
        <MdDelete />
      </button>
    </div>
  )
}

export default Header
