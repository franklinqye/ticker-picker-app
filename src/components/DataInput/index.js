import React from 'react';
import './DataInput.css';

import Select from "react-virtualized-select";


class DataInput extends React.Component {
  constructor(props) {
    super(props);

    this.processTicker = props.processTicker.bind(this);
    // this.validTickers = props.validTickers;

    this.state = { 
      currentText: "", 
      savedInputs: [], 
      loading: false,
      haveResult: false,
      displayMessage: ""
    };
    this.validateInput = this.validateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCurrentText = this.updateCurrentText.bind(this);
  }

  updateCurrentText({label: text}) {
    this.setState((state, props) => {
      return {
        ...state, 
        currentText: text
      }
    });
    console.log("updateing", text);
  }

  validateInput(ticker) {
    for (var s in this.state.savedInputs) {
      if (s === ticker) {
        return false;
      }
    }
    // if (!this.props.tickers.includes(ticker)) {
    //   return false
    // }
    return true;
  }

  handleSubmit(event) {
    console.log(this.state);
    var ticker = this.state.currentText;
    if (this.validateInput(ticker)) {
      this.setState((state, props) => {
        return {
          ...state, 
          savedInputs: [...this.state.savedInputs, ticker],
          loading: true,
          haveResult: false,
        }
      });
      this.props.processTicker(ticker)
        .then(decision => {
          this.setState((state, props) => {
            return {
              ...state, 
              savedInputs: [...this.state.savedInputs, ticker],
              loading: false,
              haveResult: true,
              displayMessage: decision
            }
          })
        .catch(err => {
          console.log("err");
        });
        })
    } else {
      this.setState((state, props) => {
        return {
          ...state, 
          loading: false
        }
      });
    }
  }

  render() {
    const options = ["aapl", "msft", "roku"].map(val=> ({
        value: val,
        label: val
      }));

    const loadingDisplay = () => (
      <div>
        Loading...
      </div>
    )

    const resultDisplay = () => (
      <div>
        { `We recommend you ${this.state.displayMessage}` }
      </div>
    )

    return (
      <div style={{"width": "320px"}}>
        <label>
          Add a Ticker to the field!
        </label>
        <div className="row">
          <div className="col-8">
            <Select
              name="Ticker"
              value="one"
              placeholder="Select Ticker"
              className="DataInput-select"
              options={options}
              option={options[0]}
              onChange={this.updateCurrentText}
              />
          </div>
          <div className="col-4">
            <button className="btn btn-primary modal-button-style" onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
        {
          this.state.loading ?
            loadingDisplay() :
            this.state.haveResult ?
              resultDisplay() :
              <div>Waiting for input...</div>
        }
      </div>
    );
  }
}

export default DataInput;
