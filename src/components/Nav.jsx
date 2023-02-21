import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiMenu } from 'react-icons/fi';

import MenuItem from './MenuItem';
import categories from '../utils/categories';

const Nav = () => {
  const [selectedCategory, setSelectedCategory] = useState('Home')
  const [isDesktop, setIsMobile] = useState(window.innerWidth > 768);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const getAction = (item) => {
    setSelectedCategory(item.name)
    if (item.action) item.action()
    if (item.name === 'Log out') toast.success('Log out completed successfully!')
    navigate(`${item.direction}`)
  }
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth > 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []);

  return (
    <div className='h-full bg-customdark sticky top-14 z-10'>
      {isDesktop ? (
        <div className='w-[240px]  bg-customdark  translate-x-[-240px] sm:translate-x-0 transition-all pt-5  '>
          <div className='flex px-5 flex-col '>
            {categories.map((item) => (
              <MenuItem
                key={item.name}
                text={item.name}
                icon={item.icon}
                action={() => getAction(item)}
                divider={item.divider}
                className={`${
                  selectedCategory === item.name
                    ? 'bg-white/[0.15]'
                    : ''
                }`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className='w-10 flex justify-center'>
          <button
            type='button'
            className={` ${showMenu ? 'hidden' : ''} mt-5  `}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className='text-2xl'>
              <FiMenu />
            </span>
          </button>
        </div>
      )}
      {!isDesktop && showMenu && (
        <div className=' flex px-5 flex-col bg-customdark h-screen fixed top-14 pt-5 z-10'>
          {categories.map((item) => (
            <MenuItem
              key={item.name}
              text={item.name}
              icon={item.icon}
              action={() => {
                getAction(item);
                setShowMenu(false);
              }}
              divider={item.divider}
              className={`${
                selectedCategory === item.name
                  ? 'bg-white/[0.15]'
                  : ''
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Nav;
