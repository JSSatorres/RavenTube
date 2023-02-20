import React from 'react';

const MenuItem = ({
  text, icon, className, action, divider,
}) => (
  <>
    <button
      onClick={action}
      type='button'
      onKeyDown={(e) => (e.key === 'Enter' ? action : null)}
      className={`custom-nav-item ${
        className}`}
    >
      <span className='text-xl mr-5'>{icon}</span>
      {text}
    </button>
    {divider && <hr className='my-5 border-white/[0.2]' />}
  </>
);

export default MenuItem;
