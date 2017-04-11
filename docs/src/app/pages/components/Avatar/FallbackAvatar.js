import React from 'react'
import Avatar from 'react-ions/lib/Avatar'
import style from './style.scss'

class ExampleAvatar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Avatar letters='cf' size='200' letterBackgroundColor='#ff0000' letterTextColor='#fff' />
    )
  }
}

export default ExampleAvatar