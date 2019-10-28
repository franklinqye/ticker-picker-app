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
  axios.get(`https://tickerpicker.appspot.com/getTickers`);

}

function processTicker(ticker) {
  console.log(`getting https://tickerpicker.appspot.com/singleSentiment/${ticker}`)
  axios.get(`https://tickerpicker.appspot.com/singleSentiment/${ticker}`)
    .then(res => {
      return res.body;
    });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Ticker Picker!</h1>
        <p>
          Enter what tickers you're interested in:
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
