import React from 'react'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

  return (
    <h1 className='header'>
      {title}
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
    </h1>
  )
}

Header.defaultProps={
  title:'Task Tracker'
}

export default Header
