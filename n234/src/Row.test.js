import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Row';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Row />, div);
});
