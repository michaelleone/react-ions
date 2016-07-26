import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'

class Spinner extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    loading: false
  }

  state = {
    loading: this.props.loading
  }

  static propTypes = {
    /**
     * Whether the spinner is displayed
     */
    loading: React.PropTypes.bool,
    /**
     * CSS positioning option for the loader. Default is 'absolute'
     */
    position: React.PropTypes.oneOf(['fixed']),
    /**
     * The type of loader you want to display.
     */
    type: React.PropTypes.oneOf(['spinner-dots', 'spinner-bounce']),
    /**
     * Optional styles to add to the textarea.
     */
    optClass: React.PropTypes.string
  }

  innerHtml = () => {
    let html

    if (this.props.type === 'spinner-dots') {
      html = <div>
               <div className={style.dot1}></div>
               <div className={style.dot2}></div>
             </div>
    }
    if (this.props.type === 'spinner-bounce') {
      html = <div>
               <div className={style.bounce1}></div>
               <div className={style.bounce2}></div>
               <div className={style.bounce3}></div>
             </div>
    }

    return html
  }

  render() {
    const cx = classNames.bind(style)
    const loadingClass = this.state.loading ? style['loading'] : null
    const spinnerWrap = cx(style['spinner-wrap'], loadingClass, this.props.optClass, this.props.position)
    const spinnerClass = cx(style[this.props.type], this.props.optClass)

    return (
      <div className={spinnerWrap}>
        <div className={spinnerClass}>
          {this.innerHtml()}
        </div>
      </div>
    )
  }
}

export default Spinner
