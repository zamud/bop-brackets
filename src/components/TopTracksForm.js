import React, { Component } from 'react';
import TopTracksBracket32 from './TopTracksBracket32';
import TopTracksBracket64 from './TopTracksBracket64';
import api from '../api/index';
import API_KEY from '../api/key';

const BASE_URL = `http://ws.audioscrobbler.com/2.0/?api_key=${API_KEY}&format=json`;

class TopTracksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: "",
      bracketSize: '',
      topTracks: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let url = `${BASE_URL}&method=artist.getTopTracks&artist=${this.state.artist}&limit=${this.state.bracketSize}`;
    console.log(url);
    await api.getTopTracks(url)
      .then((response) => {
        this.setState({
          topTracks: response.data.toptracks.track
        })
      });
  }

  render() {
    const {topTracks} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='artist'>
            Artist:
            <input type='text' id='artist' value={this.state.artist} onChange={this.handleChange} />
          </label>
          <label htmlFor='bracketSize'>
            Bracket Size:
            <select id='bracketSize' value={this.state.bracketSize} onChange={this.handleChange}>
              <option value='' disabled>Choose Number of Tracks</option>
              <option value='32'>32</option>
              <option value='64'>64</option>
            </select>
          </label>
          <input type='submit' value='Get Tracks' />
        </form>
        {
          topTracks.length > 0 && this.state.bracketSize === '32'
          ? <TopTracksBracket32 tracks={topTracks} />
          : null
        }
        {
          topTracks.length > 0 && this.state.bracketSize === '64'
          ? <TopTracksBracket64 tracks={topTracks} />
          : null
        }
      </div>
    )
  }
}

export default TopTracksForm;