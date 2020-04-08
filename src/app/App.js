import React, { Component } from 'react';
import TopTracksForm from '../components/TopTracksForm';
import TopTracksBracket32 from '../components/TopTracksBracket32';
import api, { BASE_URL } from '../api/index';
import styled from 'styled-components';

const CenteredRow = styled.div.attrs({
  className: 'row',
})`
  text-align: center
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: "",
      topTracks: [],
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
          this.setState({
            topTracks: response.data.toptracks.track,
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
    this.setState({
      artist: "",
      topTracks: [],
      errorOccurred: false,
      bracketMode: ""
    });
  }
  
  render() {
    return (
      <div className='container pt-2'>
        <CenteredRow>
          <div className='col'>
            <h2>Bop Brackets</h2>
          </div>
        </CenteredRow>
        <CenteredRow>
          <div className='col'>
            <strong>Enter an artist.  Build a bracket.  Crown the top track.</strong>
          </div>
        </CenteredRow>
        <CenteredRow className='mt-4'>
          <div className='col'>
            <TopTracksForm 
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              artist={this.state.artist}
              tracks={this.state.topTracks} />
          </div>
        </CenteredRow>
        <CenteredRow className='mt-4'>
          <div className='col'>
            {
              this.state.topTracks.length > 0
              ? <button type='button' value='printMode' className='btn btn-secondary btn-lg btn-block' onClick={this.handleModeChange}>Print it Out</button>
              : <button type='button' value='printMode' className='btn btn-secondary btn-lg btn-block' disabled>Print it Out</button>
            }
          </div>
          <div className='col'>
            {
              this.state.topTracks.length > 0
              ? <button type='button' value='fillMode' className='btn btn-secondary btn-lg btn-block' onClick={this.handleModeChange}>Fill it In</button>
              : <button type='button' value='fillMode' className='btn btn-secondary btn-lg btn-block' disabled>Fill it In</button>
            }
          </div>
          <div className='col'>
            {
              this.state.topTracks.length > 0
              ? <button type='button' className='btn btn-danger btn-lg btn-block' onClick={this.handleStartFromScratch}>Start from Scratch</button>
              : <button type='button' className='btn btn-danger btn-lg btn-block' disabled>Start from Scratch</button>
            }
          </div>
        </CenteredRow>
        {
          this.state.errorOccurred
          ? <CenteredRow className='mt-2'>
              <div className='col-md-4 offset-md-4'>
                <div className='alert alert-warning'>
                  <strong>Error!</strong>  Unable to generate a bracket.  Confirm the artist name and try again.
                </div>
              </div>
            </CenteredRow>
          : null
        }
        {
          this.state.topTracks.length > 0 && this.state.bracketMode === 'printMode'
          ? <CenteredRow className='mt-4'>
              <div className='col'>
                <TopTracksBracket32 tracks={this.state.topTracks} />
              </div>
            </CenteredRow>
          : null      
        }
      </div>
    )
  }
}

export default App;