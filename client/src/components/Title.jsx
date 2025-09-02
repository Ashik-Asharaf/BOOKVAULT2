import React from 'react'

const Title = ({title1,title2,titleStyles,title1Styles,paraStyles,para}) => {
  return (
    <div className={titleStyles}>
      <h3 className={`${titleStyles} h3 capatilize`}>
        {title1} <span className='font-light underline'>{title2}</span>
      </h3>
      <p className={`${paraStyles} max-w-md mt-2`}>{para ?
      para: "Discover and explore a wide collection of books across genres, from timeless classics to the latest releases. Our website makes it easy to find, read, and enjoy stories that inspire, entertain, and inform." }</p>
    </div>
  )
}

export default Title