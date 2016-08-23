import React from 'react';
import DrawerMenu from './DrawerMenu';

import TypographySection from './sections/Typography';
import IconSection from './sections/Icons';
import GridLayout from './sections/Grid';
import Icon from '../icon/Icon';

class PatternLibrary extends React.Component {

  static propTypes = {
    params: React.PropTypes.any
  }

  static defaultProps = {
    params: null
  }

  constructor (props) {
    super(props)
    this.state = {
      navHidden: true
    };
  }

  onTriggerClick() {
    this.setState({ navHidden: ! this.state.navHidden });
  }

  getComponentConstructors() {
    return [
      TypographySection,
      IconSection,
      GridLayout
    ];
  }

  renderSections() {
    const section = this.props.params.section;

    return this.getComponentConstructors().map((Page, index) => {
      if (section === 'all' || section === Page.displayName) {
        return <Page key={index} />;
      }
      return undefined;
    });
  }

  render () {
    const triggerIcon = this.state.navHidden ? 'Hamburger' : 'Cancel';

    return (
      <div className="pl">
        <DrawerMenu
          hidden={this.state.navHidden}
          sections={this.getComponentConstructors()}
          activeSection={this.props.params.section}
        />
        <div className="pl-content">
          <div className="pl-content__header">
            <div className="pl-sidebar__trigger" onClick={this.onTriggerClick.bind(this)}>
              <Icon icon={triggerIcon} colorTheme="white" />
            </div>
            <h1 className="pl-content__title">
              Pattern Library
            </h1>
          </div>
          {this.renderSections()}
        </div>
      </div>
    );
  }
}

export default PatternLibrary;
