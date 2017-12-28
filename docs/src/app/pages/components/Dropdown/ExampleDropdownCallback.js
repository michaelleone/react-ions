import React from 'react'
import Dropdown from 'react-ions/src/components/Dropdown'
import Button from 'react-ions/src/components/Button'
import Badge from 'react-ions/src/components/Badge'
import styles from './styles'

class ExampleDropdownCallback extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    isOpened: false
  }

  handleChange = (state) => {
    this.setState({isOpened: state})
  }

  handleOpen = () => {
    this.setState({isOpened: true})
  }

  handleClose = () => {
    this.setState({isOpened: false})
  }

  render() {
    return (
      <div>
        <Dropdown trigger={<u>dropdown here</u>} isOpened={this.state.isOpened} changeCallback={this.handleChange}>
          <div className={styles.wrapper}>
            <Badge icon='check' theme='success' /><span>Dropdown content here.</span>
          </div>
        </Dropdown>
        <div className={styles['external-controls']}>
          <p><a href="#" onClick={this.handleOpen}>Open it</a> / <a href="#" onClick={this.handleClose}>Close it</a></p>
        </div>
      </div>
    )
  }

}

export default ExampleDropdownCallback
