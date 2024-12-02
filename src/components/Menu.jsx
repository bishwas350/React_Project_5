import React from 'react'

const Menu = ({className,children}) => {
  return (
    <>
    <ul className={`flex gap-x-10 ${className}`}>{children}</ul>
    </>
  )
}

export default Menu