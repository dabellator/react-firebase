import React from 'react';

class Backend extends React.Component {

  static displayName = 'Backend';

  renderButtons () {
    let buttons = [];
    const actions = this.props.actions;

    for (let key in actions) {
      buttons.push(<div key={key}>{key}</div>);
    }

    return buttons
  }

  render () {
    return (
      <div className="pl-page backend">
        <h1 className="pl-h1">Backend</h1>
        {this.renderButtons()}
      </div>
    );
  }
}

export default Backend;
