import React from 'react';

const Blog = () => {
  return (
    <div className='mt-52'>
      <h3 className='text-5xl mb-3'>Don`t Touch Me !</h3>
      <label className="swap swap-flip text-9xl">

        {/* <!-- this hidden checkbox controls the state --> */}
        <input type="checkbox" />

        <div className="swap-on">😈</div>
        <div className="swap-off">😇</div>
      </label>
    </div>
  );
};

export default Blog; <h2>This is Blog page</h2>