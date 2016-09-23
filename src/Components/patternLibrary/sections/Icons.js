import React from 'react';
import map from 'lodash/map';
import Icon from '../../icon/Icon';

const ICONS = [
  'Back',
  'Cancel',
  'Caret',
  'Checkmark',
  'Hamburger',
  'Search'
];

class Icons extends React.Component {

  static displayName= 'Icons';

  renderIcons() {
    return map(ICONS, (icon, index) => (
      <span className="pl-icon" key={`icon-${index}`}>
        <Icon icon={icon} />
        <span className="pl-icon__name">
          <strong className="strong">Icon: </strong>
          {icon}
        </span>
      </span>
    ));
  }

  render() {
    return (
      <div className="pl-page">
        <h1 className="pl-h1">Icons</h1>
        <div className='pl-icons'>
          {this.renderIcons()}
        </div>
      </div>
    );
  }

};

export default Icons;
