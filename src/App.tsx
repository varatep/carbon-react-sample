import React from 'react';
import logo from './logo.svg';
import './App.css';

import PersonDetails from './Person/PersonDetails';

import 'carbon-components/css/carbon-components.css'

const App: React.FC = () => {
  return (
    <div>
      <PersonDetails />
    </div>
  );
}

export default App;
