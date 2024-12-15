import React from 'react'

const Pre_Arrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
    className={className}
    style={{ ...style, display: "block", background: "red" }}
    onClick={onClick}
  />
  )
}

export default Pre_Arrow