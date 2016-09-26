import React, { Component } from 'react';

export default class App extends Component {

  componentWillMount () {
    this.props.checkUser();
    this.props.testDB();
  }

  render () {
    return (
      <div className='app'>
        <h1 className='app__greeting'>
          Example Login
        </h1>
        <button onClick={this.props.logOut}>LOG OUT</button>
        <form onSubmit={this.props.createUser.bind(this)}>
          <h2>Create User</h2>
          <input id='email' type='text' placeholder='enter email' />
          <input id='pass' type='password' placeholder='password' />
          <input type='submit' value='CREATE' />
        </form>
        <form onSubmit={this.props.loginUser.bind(this)}>
          <h2>Login User</h2>
          <input id='email' type='text' placeholder='enter email' />
          <input id='pass' type='password' placeholder='password' />
          <input type='submit' value='LOGIN' />
        </form>
        {this.props.children}
      </div>
    );
  }
}
