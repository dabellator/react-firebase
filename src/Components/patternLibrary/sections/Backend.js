import React from 'react';

class Backend extends React.Component {

  static displayName= 'Backend';

  render() {
    console.log('backend render', this)
    return (
      <div className="pl-page">
       Backend...
      </div>
    );
  }
}

export default Backend;
