import React from 'react'

function HeaderTitle({title, sub}) {
  return (
    <div className='flex flex-col gap-5'>
      <div className='hero-badge m-auto'>
            <p>{sub}</p>
      </div>
      <div className='font-semibold md:text-5xl text-3xl text-center'>
            {title}
      </div>
    </div>
  )
}

export default HeaderTitle
