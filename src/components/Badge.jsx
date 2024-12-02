import React from 'react'

const Badge = ({className,badgebtn}) => {
  return (
    <div className={`py-3 px-7 bg-black text-white text-sm ${className}`}>{badgebtn}</div>
  )
}

export default Badge