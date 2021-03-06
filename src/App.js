import React, { Component, Fragment } from 'react';
import BopBracketsFormAndControls from './components/bop-brackets/BopBracketsFormAndControls';
import BopBracketsHeader from './components/bop-brackets/BopBracketsHeader';
import FillBracket from './components/fill-in/FillBracket';
import FillBracketMobile from './components/fill-in-mobile/FillBracketMobile';
import api, { BASE_URL } from './api/index';
import bracketUtils from './utils/bracketUtils';
import styleUtils from './utils/styleUtils';
import { BrowserView, MobileView } from 'react-device-detect';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: "",
      topTracks: [],
      orderedMatchups: [],
      errorOccurred: false,
      bracketMode: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let url = `${BASE_URL}&method=artist.getTopTracks&artist=${this.state.artist}&limit=32`;
    console.log(url);
    await api.getTopTracks(url)
      .then((response) => {
        if(response.data.error) {
          this.setState({
            errorOccurred: true
          })
        } else {
          var seedsArray = bracketUtils.seedBracket(response.data.toptracks.track)
          var matchups = bracketUtils.createMatchups(seedsArray)
          var orderedMatchups = bracketUtils.orderMatchups(matchups)
          this.setState({
            topTracks: response.data.toptracks.track,
            orderedMatchups: orderedMatchups,
            errorOccurred: false
          });
        }
      });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleModeChange = (event) => {
    this.setState({
      bracketMode: event.target.value
    });
  }

  handleStartFromScratch = (event) => {
    if(window.confirm(`Are you sure?  This will clear everything you've submitted.`)) {
      this.setState({
        artist: "",
        topTracks: [],
        errorOccurred: false,
        orderedMatchups: [],
        bracketMode: ""
      });
    }
  }
  
  render() {
    return (
      <div className='container pt-2'>
        <BopBracketsHeader />
        <styleUtils.CenteredRow className='mt-4 mb-4'>
          <div className='col'>
            <BopBracketsFormAndControls 
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              handleStartFromScratch={this.handleStartFromScratch}
              handleModeChange={this.handleModeChange}
              artist={this.state.artist}
              matchups={this.state.orderedMatchups}
              errorOccurred={this.state.errorOccurred} />
          </div>
        </styleUtils.CenteredRow>
        {
          this.state.topTracks.length === 0 && this.state.bracketMode === ''
          ? <styleUtils.CenteredRow className='mt-5'>
              <div className='col alert alert-secondary'>
                <h4>Welcome to Bop Brackets.  Enter an artist and generate a bracket to start.</h4>
              </div>
            </styleUtils.CenteredRow>
          : null      
        }
        {
          this.state.topTracks.length > 0 && this.state.bracketMode === ''
          ? <styleUtils.CenteredRow className='mt-5'>
              <div className='col alert alert-success'>
                <h4>Your bracket is ready.</h4>
              </div>
            </styleUtils.CenteredRow>
          : null      
        }
        {
          this.state.topTracks.length > 0 && this.state.bracketMode === 'fillMode'
          ? <Fragment>
              <BrowserView>
                <FillBracket artist={this.state.artist} matchups={this.state.orderedMatchups} />
              </BrowserView>
              <MobileView>
                <FillBracketMobile artist={this.state.artist} matchups={this.state.orderedMatchups} />
              </MobileView>
            </Fragment>            
          : null      
        }
      </div>
    )
  }
}

export default App;