import React, {Component} from 'react';
import FillBracketFirstRound from './FillBracketFirstRound';
import FillBracketMatchup from './FillBracketMatchup';
import FillBracketChampCard from './FillBracketChampCard';
import PDFBracketFilled from '../pdf/PDFBracketFilled';
import { PDFDownloadLink } from '@react-pdf/renderer';
import styleUtils from '../../utils/styleUtils'

class FillBracket extends Component {
  constructor(props) {
    super(props);
    this.state={
      r16: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      qf: ['', '', '', '', '', '', '', ''],
      sf: ['', '', '', ''],
      f: ['', ''],
      c: [''],
      completed: false
    }
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

  render() {
    const {matchups} = this.props;
    const {r16, qf, sf, f, c} = this.state;
    console.log(this.state);

    return (
      <div className='container'>
        {
          this.state.completed
          ? null
          : <div className='row'>
              <div className='col-md-4 col-sm-12 col-12'>
                {
                  matchups.map((matchup) => {
                    const i = matchups.indexOf(matchup);
                    return <FillBracketFirstRound round='r32' matchupId={i} song1={matchup[1]} song2={matchup[2]} winner={r16[i]} nextRound='r16' paddingBottom='0' handleSelect={this.handleSelect}/>
                  })
                }
              </div>
              <styleUtils.SecondRoundCol>
                {
                  Array.from(new Array(8), (x,i) => i*2).map((i) => {
                    return <FillBracketMatchup round='r16' matchupId={i/2} song1={r16[i]} song2={r16[i+1]} winner={qf[i/2]} nextRound='qf' paddingBottom='140px' handleSelect={this.handleSelect}/>
                  })
                }
              </styleUtils.SecondRoundCol>
              <styleUtils.ThirdRoundCol>
                {
                  Array.from(new Array(4), (x,i) => i*2).map((i) => {
                    return <FillBracketMatchup round='qf' matchupId={i/2} song1={qf[i]} song2={qf[i+1]} winner={sf[i/2]} nextRound='sf' paddingBottom='320px' handleSelect={this.handleSelect}/>
                  })
                }
              </styleUtils.ThirdRoundCol>
              <styleUtils.FourthRoundCol>
                {
                  Array.from(new Array(2), (x,i) => i*2).map((i) => {
                    return <FillBracketMatchup round='sf' matchupId={i/2} song1={sf[i]} song2={sf[i+1]} winner={f[i/2]} nextRound='f' paddingBottom='670px' handleSelect={this.handleSelect}/>
                  })
                }
              </styleUtils.FourthRoundCol>
              <styleUtils.FinalCol>
                <FillBracketMatchup round='f' matchupId='0' song1={f[0]} song2={f[1]} winner={c[0]} nextRound='c' paddingBottom='0' handleSelect={this.handleSelect}/>
                <FillBracketChampCard champ={c[0]} />
                {
                  c[0] !== ''
                  ? <PDFDownloadLink
                      className='btn btn-lg btn-block btn-danger mt-2' 
                      document={<PDFBracketFilled matchups={matchups} r16tracks={r16} qfTracks={qf} sfTracks={sf} fTracks={f} champ={c[0]}/>}
                      fileName={`bopbracket-${this.props.artist}.pdf`}>
                      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Generate PDF')}
                    </PDFDownloadLink>
                  : null
                }
              </styleUtils.FinalCol>
            </div>
        }
      </div>
    )
  }
}

export default FillBracket;