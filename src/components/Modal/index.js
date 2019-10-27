import React from 'react';
import './Modal.css';
// import 'bootstrap/dist/css/bootstrap.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalOpen: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    console.log("tooggle")
    this.setState((state, props) => {
      return {
        ...state, 
        modalOpen: !state.modalOpen
      }
    });
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary buttonStyle" onClick={this.toggleModal}>
          How does this work?
        </button>

        <div className={`modal fade ${this.state.modalOpen && "show"}`} id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{"display": this.state.modalOpen && "block"}}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content" style={{"backgroundColor": "#5a638c"}}>
              <div className="modal-body">
                <p>
                Ticker Picker is an application that recommends which stocks to buy based on machine learning algorithms. The core of our application is a recurrent neural network which uses market data from the Goldman Sachs Marquee API. The neural network combines this data with additional information from sentinent analysis that we ran on the top tweets of the stock name using Google's Cloud Natural Language API and Twitter's Standard API. The output of the neural network is fed through a softmax function which ultimately classifies the stock into one of three categories: buy, hold, or sell.
                </p>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.toggleModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
