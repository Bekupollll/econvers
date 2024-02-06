import React from 'react'

const Button = (props) => {
  return (
    <button style={{backgroundColor: props.backgroundColor }} className='btn'>
      {props.text}
    </button>
  )
}

export default Button
