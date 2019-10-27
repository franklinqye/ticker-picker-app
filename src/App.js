import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import 'react-select/dist/react-select.css'
import 'react-virtualized-select/styles.css'
// Then import the virtualized Select HOC
import VirtualizedSelect from 'react-virtualized-select'

import axios from 'axios';

import { Modal, DataInput} from './components'



function getTickers() {
  axios.get();

}

function processTicker() {
  axios.get();

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Ticker Picker!</h1>
        <p>
          Enter what tickers your interested in:
        </p>
        <div className="py-5">
          <DataInput 
            validTickers={getTickers}
            processTicker={processTicker}
            />
        </div>
        <Modal/>

        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
    </div>
  );
}

export default App;
