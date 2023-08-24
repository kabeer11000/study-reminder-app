import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Title />, div);
  ReactDOM.unmountComponentAtNode(div);
});