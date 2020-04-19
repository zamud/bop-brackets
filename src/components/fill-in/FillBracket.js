import React, {Component} from 'react';
import FillBracketFirstRound from './FillBracketFirstRound';
import FillBracketMatchup from './FillBracketMatchup';
import FillBracketChampCard from './FillBracketChampCard';
import PDFBracketFilled from '../pdf/PDFBracketFilled';
import styled from 'styled-components';

const SecondRoundCol = styled.div.attrs({
  className: 'col-md-2'
})`
  margin-top: 50px;
  margin-left: 0px !important
  margin-right: 0px !important
`
const ThirdRoundCol = styled.div.attrs({
  className: 'col-md-2'
})`
  margin-top: 140px;
  margin-left: 0px !important
  margin-right: 0px !important
`
const FourthRoundCol = styled.div.attrs({
  className: 'col-md-2'
})`
  margin-top: 300px;
  margin-left: 0px !important
  margin-right: 0px !important
`
const FinalCol = styled.div.attrs({
  className: 'col-md-2'
})`
  margin-top: 635px;
  margin-left: 0px !important
  margin-right: 0px !important
`
class FillBracket extends Component {
  constructor(props) {
    super(props);
    this.state={
      r16_1: '',
      r16_2: '',
      r16_3: '',
      r16_4: '',
      r16_5: '',
      r16_6: '',
      r16_7: '',
      r16_8: '',
      r16_9: '',
      r16_10: '',
      r16_11: '',
      r16_12: '',
      r16_13: '',
      r16_14: '',
      r16_15: '',
      r16_16: '',
      qf_1: '',
      qf_2: '',
      qf_3: '',
      qf_4: '',
      qf_5: '',
      qf_6: '',
      qf_7: '',
      qf_8: '',
      sf_1: '',
      sf_2: '',
      sf_3: '',
      sf_4: '',
      f_1: '',
      f_2: '',
      c_1: '',
      completed: false
    }
  }

  handleSelect = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handlePDFClick = () => {
    this.setState({
      completed: true
    });
  }

  render() {
    const paddingBottoms = {
      r16: '140px',
      qf: '320px',
      sf: '670px',
    }
    const {matchups} = this.props;
    const {r16_1, r16_2, r16_3, r16_4, r16_5, r16_6, r16_7, r16_8,
           r16_9, r16_10, r16_11, r16_12, r16_13, r16_14, r16_15, r16_16} = this.state;
    const {qf_1, qf_2, qf_3, qf_4, qf_5, qf_6, qf_7, qf_8} = this.state;
    const {sf_1, sf_2, sf_3, sf_4} = this.state;
    const {f_1, f_2} = this.state;
    const {c_1} = this.state;

    return (
      <div className='container'>
        {
          this.state.completed
          ? null
          : <div className='row'>
              <div className='col-md-4 col-sm-12 col-12'>
                <FillBracketFirstRound round='r32' matchupId='1' song1={matchups[0][1]} song2={matchups[0][2]} winner={r16_1} nextRound='r16' paddingBottom='0' handleSelect={this.handleSelect}/>
                <FillBracketFirstRound round='r32' matchupId='2' song1={matchups[1][1]} song2={matchups[1][2]} winner={r16_2} nextRound='r16' paddingBottom='0' handleSelect={this.handleSelect}/>
                <FillBracketFirstRound round='r32' matchupId='3' song1={matchups[2][1]} song2={matchups[2][2]} winner={r16_3} nextRound='r16' paddingBottom='0' handleSelect={this.handleSelect}/>
                <FillBracketFirstRound round='r32' matchupId='4' song1={matchups[3][1]} song2={matchups[3][2]} winner={r16_4} nextRound='r16' paddingBottom='0' handleSelect={this.handleSelect}/>
                <FillBracketFirstRound round='r32' matchupId='5' song1={matchups[4][1]} song2={matchups[4][2]} winner={r16_5} nextRound='r16' paddingBottom='0' handleSelect={this.handleSelect}/>
                <FillBracketFirstRound round='r32' matchupId='6' song1={matchups[5][1]} song2={matchups[5][2]} winner={r16_6} nextRound='r16' paddingBottom='0' handleSelect={this.handleSelect}/>
                <FillBracketFirstRound round='r32' matchupId='7' song1={matchups[6][1]} song2={matchups[6][2]} winner={r16_7} nextRound='r16' paddingBottom='0' handleSelect={this.handleSelect}/>
                <FillBracketFirstRound round='r32' matchupId='8' song1={matchups[7][1]} song2={matchups[7][2]} winner={r16_8} nextRound='r16' paddingBottom='0' handleSelect={this.handleSelect}/>
                <FillBracketFirstRound round='r32' matchupId='9' song1={matchups[8][1]} song2={matchups[8][2]} winner={r16_9} nextRound='r16' paddingBottom='0' handleSelect={this.handleSelect}/>
                <FillBracketFirstRound round='r32' matchupId='10' song1={matchups[9][1]} song2={matchups[9][2]} winner={r16_10} nextRound='r16' paddingBottom='0' handleSelect={this.handleSelect}/>
                <FillBracketFirstRound round='r32' matchupId='11' song1={matchups[10][1]} song2={matchups[10][2]} winner={r16_11} nextRound='r16' paddingBottom='0' handleSelect={this.handleSelect}/>
                <FillBracketFirstRound round='r32' matchupId='12' song1={matchups[11][1]} song2={matchups[11][2]} winner={r16_12} nextRound='r16' paddingBottom='0' handleSelect={this.handleSelect}/>
                <FillBracketFirstRound round='r32' matchupId='13' song1={matchups[12][1]} song2={matchups[12][2]} winner={r16_13} nextRound='r16' paddingBottom='0' handleSelect={this.handleSelect}/>
                <FillBracketFirstRound round='r32' matchupId='14' song1={matchups[13][1]} song2={matchups[13][2]} winner={r16_14} nextRound='r16' paddingBottom='0' handleSelect={this.handleSelect}/>
                <FillBracketFirstRound round='r32' matchupId='15' song1={matchups[14][1]} song2={matchups[14][2]} winner={r16_15} nextRound='r16' paddingBottom='0' handleSelect={this.handleSelect}/>
                <FillBracketFirstRound round='r32' matchupId='16' song1={matchups[15][1]} song2={matchups[15][2]} winner={r16_16} nextRound='r16' paddingBottom='0' handleSelect={this.handleSelect}/>
              </div>
              <SecondRoundCol>
                <FillBracketMatchup round='r16' matchupId='1' song1={r16_1} song2={r16_2} winner={qf_1} nextRound='qf' paddingBottom={paddingBottoms.r16} handleSelect={this.handleSelect}/>
                <FillBracketMatchup round='r16' matchupId='2' song1={r16_3} song2={r16_4} winner={qf_2} nextRound='qf' paddingBottom={paddingBottoms.r16} handleSelect={this.handleSelect}/>
                <FillBracketMatchup round='r16' matchupId='3' song1={r16_5} song2={r16_6} winner={qf_3} nextRound='qf' paddingBottom={paddingBottoms.r16} handleSelect={this.handleSelect}/>
                <FillBracketMatchup round='r16' matchupId='4' song1={r16_7} song2={r16_8} winner={qf_4} nextRound='qf' paddingBottom={paddingBottoms.r16} handleSelect={this.handleSelect}/>
                <FillBracketMatchup round='r16' matchupId='5' song1={r16_9} song2={r16_10} winner={qf_5} nextRound='qf' paddingBottom={paddingBottoms.r16} handleSelect={this.handleSelect}/>
                <FillBracketMatchup round='r16' matchupId='6' song1={r16_11} song2={r16_12} winner={qf_6} nextRound='qf' paddingBottom={paddingBottoms.r16} handleSelect={this.handleSelect}/>
                <FillBracketMatchup round='r16' matchupId='7' song1={r16_13} song2={r16_14} winner={qf_7} nextRound='qf' paddingBottom={paddingBottoms.r16} handleSelect={this.handleSelect}/>
                <FillBracketMatchup round='r16' matchupId='8' song1={r16_15} song2={r16_16} winner={qf_8} nextRound='qf' paddingBottom={paddingBottoms.r16} handleSelect={this.handleSelect}/>
              </SecondRoundCol>
              <ThirdRoundCol>
                <FillBracketMatchup round='qf' matchupId='1' song1={qf_1} song2={qf_2} winner={sf_1} nextRound='sf' paddingBottom={paddingBottoms.qf} handleSelect={this.handleSelect}/>
                <FillBracketMatchup round='qf' matchupId='2' song1={qf_3} song2={qf_4} winner={sf_2} nextRound='sf' paddingBottom={paddingBottoms.qf} handleSelect={this.handleSelect}/>
                <FillBracketMatchup round='qf' matchupId='3' song1={qf_5} song2={qf_6} winner={sf_3} nextRound='sf' paddingBottom={paddingBottoms.qf} handleSelect={this.handleSelect}/>
                <FillBracketMatchup round='qf' matchupId='4' song1={qf_7} song2={qf_8} winner={sf_4} nextRound='sf' paddingBottom={paddingBottoms.qf} handleSelect={this.handleSelect}/>
              </ThirdRoundCol>
              <FourthRoundCol>
                <FillBracketMatchup round='sf' matchupId='1' song1={sf_1} song2={sf_2} winner={f_1} nextRound='f' paddingBottom={paddingBottoms.sf} handleSelect={this.handleSelect}/>
                <FillBracketMatchup round='sf' matchupId='2' song1={sf_3} song2={sf_4} winner={f_2} nextRound='f' paddingBottom={paddingBottoms.sf} handleSelect={this.handleSelect}/>
              </FourthRoundCol>
              <FinalCol>
                <FillBracketMatchup round='f' matchupId='1' song1={f_1} song2={f_2} winner={c_1} nextRound='c' paddingBottom='0' handleSelect={this.handleSelect}/>
                <FillBracketChampCard champ={c_1} />
                {
                  c_1 !== ''
                  ? <button className="btn btn-block btn-danger mt-4" onClick={this.handlePDFClick}>Generate PDF</button>
                  : null
                }
              </FinalCol>
            </div>
        }
        {
          this.state.completed
          ? <div className='row'>
              <PDFBracketFilled
                matchups={matchups}
                r16tracks={[r16_1, r16_2, r16_3, r16_4, r16_5, r16_6, r16_7, r16_8,
                            r16_9, r16_10, r16_11, r16_12, r16_13, r16_14, r16_15, r16_16]}
                qfTracks={[qf_1, qf_2, qf_3, qf_4, qf_5, qf_6, qf_7, qf_8]}
                sfTracks={[sf_1, sf_2, sf_3, sf_4]}
                fTracks={[f_1, f_2]}
                champ={c_1}
              />
            </div>
          : null
        }
      </div>
    )
  }
}

export default FillBracket;