import React from 'react'

const GlobalTitle = ({title, subTitle}) => {
  return (
      <div className=''>
          <h2 className=' capitalize text-2xl lg:text-3xl tracking-wide mb-1 lg:mb-2'>{title}</h2>
          {subTitle && <p className='text-lg lg:text-xl text-gray-500 dark:text-gray-400'>{subTitle}</p>}
    </div>
  )
}

export default GlobalTitle