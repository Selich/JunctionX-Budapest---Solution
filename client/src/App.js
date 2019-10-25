import React, { Component } from "react";

import TopNav from "./navigation/TopNav/TopNav";
import CharityPreview from "./mainContent/CharityPreview/CharityPreview";
import CharityFullView from "./mainContent/CharityFullView/CharityFullView";
import TransactionFullView from "./mainContent/TransactionFullView/TransactionFullView";
import BottomNav from "./navigation/BottomNav/BottomNav";
import Register from './components/Register'
import Fortmatic from "fortmatic";
import Web3 from "web3";

import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "INTRO" // 'BROWSE', 'YOUR_CHARITY'
    };
  }

  updateSearchTerms = searchTerms => {
    this.setState({ searchTerms });
  };

  setSearchBarOpen = searchBarOpen => {
    this.setState({ searchBarOpen });
  };

  setTransactionInModal = (modalOpen, transactionInView) => {
    this.setState({
      modalOpen,
      transactionInView
    });
  };

  fetchAllCharities = () => {
    const requestState =
      this.state.charityRequestState === "DONE" ? "DONE" : "FETCHING";

    // this.setState({ charityRequestState: requestState }, () => {
    //     fetch('/api/v1/charity')
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error(response.json().error);
    //         }

    //         return response.json();
    //     })
    //     .then(json => {
    //         this.setState({
    //             error: '',
    //             charities: json.data,
    //             charityRequestState: 'DONE',
    //         });
    //     }).catch(e => {
    //         console.error(e);
    //         this.setState({
    //             error: `Failed to fetch charities: ${e}`,
    //             charityRequestState: 'ERROR',
    //         });
    //     });
    // });
  };

  componentDidMount() {
    const intervalId = setInterval(this.fetchAllCharities, 2500);
    this.setState({ intervalId: intervalId });
    this.fetchAllCharities();
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const {
      charityRequestState,
      charities,
      error,
      view,
      searchTerms,
      searchBarOpen,
      charityInView,
      balanceInView,
      transactions,
      transactionsRequestState,
      transactionInView,
      modalOpen
    } = this.state;
    let content;

    switch (view) {
      case "INTRO":
        return (
          <div className="App">
            <div className="Intro">
              <div className="intro-info">
                <h1 className="hundred">Tasco</h1>
                <h2 className="transperent">Looging for donations?</h2>
                <h2 className="charities">charities</h2>
                <button
                  className="solid white blue large"
                  onClick={() => this.setState({ view: "BROWSE" })}
                >
                  View available Tesco stores nearby
                </button>
              </div>
              <div className="bottom-button-container">
                <button 
                className="solid blue large"
                onClick={() => this.setState({ view: "REGISTER" })}
                >Register</button>
              </div>
            </div>
          </div>
        );
      case "REGISTER":
        return (
          <div className="App">
            <Register/>
          </div>
        );
      default:
        const { myCharityID, charityInView } = this.state;

        return (
          <div className="App">
            {transactionInView && modalOpen && <TransactionFullView />}
            {transactionInView && modalOpen && (
              <div className="white-overlay" />
            )}
            <TopNav
              view={view}
              searchTerms={searchTerms}
              searchBarOpen={searchBarOpen}
              setSearchBarOpen={this.setSearchBarOpen}
              updateSearchTerms={this.updateSearchTerms}
            />
            <div
              className={charityInView ? "main-content" : "main-content list"}
            >
              {content}
            </div>
            <BottomNav view={view} changeView={this.changeView} />
          </div>
        );
    }
  }
}

export default App;
