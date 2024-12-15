import React from 'react'

const NextArrow = (props) => {
    const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}>

      </div>
  )
}

export default NextArrow