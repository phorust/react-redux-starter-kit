import React from 'react';
import './Editor.scss';

class Counter extends React.Component {
  props: {
    counter     : React.PropTypes.number.isRequired,
    doubleAsync : React.PropTypes.func.isRequired,
    increment   : React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className='editor'>
        <input type='text' placeholder='Hello' />
        <textarea />
      </div>
    );
  }
}

export default Counter;
