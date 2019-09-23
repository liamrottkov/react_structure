import React, { Component } from 'react';








class Data extends Component {
  constructor() {
    super();

    this.state = {
      'name': 'LIAM ROTTKOV',
      'age': 22,
      // 'img': 'http://placehold.it/250x250'
    };
  }


  render() {
    // this is JavaScript
    return ( // this is also JavaScript
      <div className="Info">
        <p>React Homework</p>
        <a className="link" onClick={this.handleClick} style={{cursor: 'pointer'}}>click me!</a>
        <br />
        <a className="link" onClick={this.handleClick} style={{cursor: 'pointer'}}>click me! i'm another link</a>

      {/*<p>{this.props.team} play the sport of {this.props.sport}.</p>*/}
        {/* This is a comment in JSX */}
        <p>This is the data component.</p>
        <p>{this.state.name}</p>
        <p className="Logo"></p>
        <img src='http://placehold.it/250x250' />
      </div> // this is also JavaScript
    );
  }
}

export default Data;
