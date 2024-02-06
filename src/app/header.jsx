import React from 'react'
import H1 from './dotorh/h1'
import Button from './dotorh/Button'

const header = ({text}) => {
  return (
    <div className='header'>
      <H1/>
      <Button text="ADD" backgroundColor="red"/>
    </div>
  )
}

export default header
