import React from 'react';

class Icon extends React.Component {

  static propTypes = {
    icon: React.PropTypes.string.isRequired,
    size: React.PropTypes.oneOf([
      'x-small',
      'small',
      'large',
      'x-large',
      null
    ]),
    rotate: React.PropTypes.oneOf([
      0,
      45,
      90,
      180,
      270
    ]),
    color: React.PropTypes.oneOf([
      'black',
      'white',
      'primary',
      'secondary',
      'tertiary',
      'status--success',
      'status--warning',
      'status--error',
      null
    ]),
    className: React.PropTypes.string
  }

  static defaultProps = {
    size: null,
    rotate: 0,
    color: null,
    className: null
  }

  render () {
    /* eslint-disable global-require */
    const IconComponent = require(`./icons/${this.props.icon}`).default;

    const sizeClass = this.props.size ? `+${this.props.size}` : null;

    const colorClass = this.props.color ? `+${this.props.color}` : null;

    const rotationClass = `+rotate-${this.props.rotate}`;
    /* eslint-enable */
    const classes = [
      'icon',
      this.props.size ? sizeClass : null,
      colorClass,
      this.props.rotate ? rotationClass : null,
      this.props.className
    ].join(' ').trim();

    return (
      <span className={classes}>
        <IconComponent />
      </span>
    );
  }

}

export default Icon;
