import React, {Component} from 'react';
import FillBracketMobileMatchup from './FillBracketMobileMatchup';
import FillBracketMobileControls from './FillBracketMobileControls';
import FillBracketChampCard from '../fill-in/FillBracketChampCard';
import PDFBracketFilled from '../pdf/PDFBracketFilled';
import { PDFDownloadLink } from '@react-pdf/renderer';

class FillBracketMobile extends Component {
  constructor(props) {
    super(props);
    this.state={
      r16: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      qf: ['', '', '', '', '', '', '', ''],
      sf: ['', '', '', ''],
      f: ['', ''],
      c: [''],
      round: 1,
      completed: false
    }

    this.handleRoundIncrement = this.handleRoundIncrement.bind(this);
  }

  handleSelect = (event) => {
    const round = event.target.id.split('_')[0];
    const index = event.target.id.split('_')[1];
    var newTracks = [];
    switch(round) {
      case 'r16':
        newTracks = this.state.r16;
        break;
      case 'qf':
        newTracks = this.state.qf;
        break;
      case 'sf':
        newTracks = this.state.sf;
        break;
      case 'f':
        newTracks = this.state.f;
        break;
      case 'c':
        newTracks = this.state.c;
        break;
      default:
        break;
    }
    newTracks[index] = event.target.value;
    this.setState({
      [round]: newTracks
    });
  }

  handlePDFClick = () => {
    this.setState({
      completed: true
    });
  }

  handleRoundIncrement = () => {
    this.setState(prevState => ({
      round: prevState.round + 1
    }));
  }

  handleRoundDecrement = () => {
    this.setState(prevState => ({
      round: prevState.round - 1
    }));
  }

  render() {
    const {matchups} = this.props;
    const {r16, qf, sf, f, c} = this.state;
    let nextRoundEnabled = false;

    if(this.state.round === 1 && !r16.includes('')) {
      nextRoundEnabled = true;
    }
    if(this.state.round === 2 && !qf.includes('')) {
      nextRoundEnabled = true;
    }
    if(this.state.round === 3 && !sf.includes('')) {
      nextRoundEnabled = true;
    }
    if(this.state.round === 4 && !f.includes('')) {
      nextRoundEnabled = true;
    }

    return (
      <div className='container'>
        {
          this.state.completed === false && this.state.round === 1
          ? <React.Fragment>
              <div className='row'>
                <div className='col-12 mb-2' style={{textAlign: "center"}}><h4>First Round</h4></div>
              </div>
              {
                matchups.map((matchup) => {
                  const i = matchups.indexOf(matchup);
                  return <FillBracketMobileMatchup round='r32' matchupId={i} song1={matchup[1]} song2={matchup[2]} winner={r16[i]} nextRound='r16' paddingBottom='0' handleSelect={this.handleSelect}/>
                })
              }
              <FillBracketMobileControls enabled={nextRoundEnabled} round={this.state.round} handleRoundIncrement={this.handleRoundIncrement} handleRoundDecrement={this.handleRoundDecrement} />
            </React.Fragment>
          : null
        }
        {
          this.state.completed === false && this.state.round === 2
          ? <React.Fragment>
              <div className='row'>
                <div className='col-12 mb-2' style={{textAlign: "center"}}><h4>Second Round</h4></div>
              </div>
              {
                Array.from(new Array(8), (x,i) => i*2).map((i) => {
                  return <FillBracketMobileMatchup round='r16' matchupId={i/2} song1={r16[i]} song2={r16[i+1]} winner={qf[i/2]} nextRound='qf' handleSelect={this.handleSelect}/>
                })
              }
              <FillBracketMobileControls enabled={nextRoundEnabled} round={this.state.round} handleRoundIncrement={this.handleRoundIncrement} handleRoundDecrement={this.handleRoundDecrement} />
            </React.Fragment>
          : null
        }
        {
          this.state.completed === false && this.state.round === 3
          ? <React.Fragment>
              <div className='row'>
                <div className='col-12 mb-2' style={{textAlign: "center"}}><h4>Quarterfinals</h4></div>
              </div>
              {
                Array.from(new Array(4), (x,i) => i*2).map((i) => {
                  return <FillBracketMobileMatchup round='qf' matchupId={i/2} song1={qf[i]} song2={qf[i+1]} winner={sf[i/2]} nextRound='sf' paddingBottom='320px' handleSelect={this.handleSelect}/>
                })
              }
              <FillBracketMobileControls enabled={nextRoundEnabled} round={this.state.round} handleRoundIncrement={this.handleRoundIncrement} handleRoundDecrement={this.handleRoundDecrement} />
            </React.Fragment>
          : null
        }
        {
          this.state.completed === false && this.state.round === 4
          ? <React.Fragment>
              <div className='row'>
                <div className='col-12 mb-2' style={{textAlign: "center"}}><h4>Semifinals</h4></div>
              </div>
              {
                Array.from(new Array(2), (x,i) => i*2).map((i) => {
                  return <FillBracketMobileMatchup round='sf' matchupId={i/2} song1={sf[i]} song2={sf[i+1]} winner={f[i/2]} nextRound='f' paddingBottom='670px' handleSelect={this.handleSelect}/>
                })
              }
              <FillBracketMobileControls enabled={nextRoundEnabled} round={this.state.round} handleRoundIncrement={this.handleRoundIncrement} handleRoundDecrement={this.handleRoundDecrement} />
            </React.Fragment>
          : null
        }
        {
          this.state.completed === false && this.state.round === 5
          ? <React.Fragment>
              <div className='row'>
                <div className='col-12 mb-2' style={{textAlign: "center"}}><h4>Finals</h4></div>
              </div>
              <FillBracketMobileMatchup round='f' matchupId='0' song1={f[0]} song2={f[1]} winner={c[0]} nextRound='c' handleSelect={this.handleSelect}/>
              <FillBracketChampCard champ={c[0]} />
              {
                c[0] !== ''
                ? <PDFDownloadLink
                      className='btn btn-lg btn-block btn-danger mt-2' 
                      document={<PDFBracketFilled
                                  matchups={matchups}
                                  r16tracks={r16}
                                  qfTracks={qf}
                                  sfTracks={sf}
                                  fTracks={f}
                                  champ={c[0]}/>}
                      fileName={`bopbracket-${this.props.artist}.pdf`}>
                      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Generate PDF')}
                    </PDFDownloadLink>
                : null
              }
            </React.Fragment>
          : null
        }
      </div>
    )
  }
}

export default FillBracketMobile;