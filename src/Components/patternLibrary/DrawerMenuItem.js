import React from 'react';
import classNames from 'classnames';
import { browserHistory } from 'react-router'

class PLDrawerMenuItem extends React.Component {

  static propTypes = {
    active: React.PropTypes.bool,
    displayName: React.PropTypes.string,
    children: React.PropTypes.any,
  }

  contextTypes: {
    router: React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    active: false,
    displayName: ''
  }

  onClick() {
    if (this.props.displayName) {
      browserHistory.push(`/pattern-library/${this.props.displayName}`);
    } else {
      browserHistory.push('/pattern-library');
    }
  }

  render() {
    let display;

    const linkClasses = [
      'pl-nav__menu-link',
      this.props.active ? 'pl-nav__menu-link--is-current' : null
    ];

    if (this.props.children) {
      display = this.props.children;
    } else {
      display = this.props.displayName;
    }

    return (
      <li className="pl-nav__menu-item">
        <a className={classNames(linkClasses)} onClick={this.onClick.bind(this)}>
          {display}
        </a>
      </li>
    );
  }

};

export default PLDrawerMenuItem;