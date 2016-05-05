import React from 'react'
import classNames from 'classnames/bind'
import style from './style.scss'

/**
 * The Textarea component.
 */
class Textarea extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    value: this.props.value
  }

  static defaultProps = {
    disabled: false
  }

  static propTypes = {
    /**
     * Whether the textarea is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * Text shown above the textarea.
     */
    label: React.PropTypes.string,
    /**
     * Value of the textarea.
     */
    value: React.PropTypes.string,
    /**
     * Optional placeholder text.
     */
    placeholder: React.PropTypes.string,
    /**
     * Optional styles to add to the textarea.
     */
    optClass: React.PropTypes.string,
    /**
     * A callback function to be called when the textarea changes.
     */
    onChange: React.PropTypes.func,
    /**
     * A callback function to be called when the textarea is focused.
     */
    onFocus: React.PropTypes.func,
    /**
     * A callback function to be called when the textarea is blurred.
     */
    onBlur: React.PropTypes.func
  };

  handleChange = (event) => {
    this.setState({value: event.target.value}, function() {
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(event);
      }
    });
  }

  handleFocus = (event) => {
    if (typeof this.props.onFocus === 'function') {
      this.props.onFocus(event);
    }
  }

  handleBlur = (event) => {
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(event);
    }
  }

  render() {
    const {
      label,
      value,
      optClass,
      ...other
    } = this.props;

    const cx = classNames.bind(style);
    var disabledClass = this.props.disabled ? style['textarea-disabled'] : '';
    var textareaClass = cx(style['textarea-component'], this.props.optClass, disabledClass);

    return (
      <div className={textareaClass}>
        {this.props.label ? <label>{this.props.label}</label> : null}
        <textarea
          value={this.state.value}
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          {...other}>
        </textarea>
      </div>
    )
  }
}

export default Textarea
