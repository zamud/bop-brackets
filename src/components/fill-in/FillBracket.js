import React, {Component} from 'react';
import FillBracketFirstRoundRegion from './FillBracketFirstRoundRegion';
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
      region0Matchups: [],
      region1Matchups: [],
      region2Matchups: [],
      region3Matchups: [],
      allMatchups: [],
      region0matchup0: '',
      region0matchup1: '',
      region0matchup2: '',
      region0matchup3: '',
      region1matchup0: '',
      region1matchup1: '',
      region1matchup2: '',
      region1matchup3: '',
      region2matchup0: '',
      region2matchup1: '',
      region2matchup2: '',
      region2matchup3: '',
      region3matchup0: '',
      region3matchup1: '',
      region3matchup2: '',
      region3matchup3: '',
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

  componentDidMount = () => {
    this.setState({
      region0Matchups: this.props.matchups[0],
      region1Matchups: this.props.matchups[1],
      region2Matchups: this.props.matchups[2],
      region3Matchups: this.props.matchups[3],
      allMatchups: [].concat(this.props.matchups[0], this.props.matchups[1], this.props.matchups[2], this.props.matchups[3])
    })
  }

  render() {
    const paddingBottoms = {
      r16: '140px',
      qf: '320px',
      sf: '670px',
    }
    const {region0Matchups, region1Matchups, region2Matchups, region3Matchups, allMatchups} = this.state;

    const {region0matchup0, region0matchup1, region0matchup2, region0matchup3,
           region1matchup0, region1matchup1, region1matchup2, region1matchup3,
           region2matchup0, region2matchup1, region2matchup2, region2matchup3,
           region3matchup0, region3matchup1, region3matchup2, region3matchup3} = this.state;
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
              <div className='col-md-4'>
                <FillBracketFirstRoundRegion matchups={region0Matchups} regionId='0' handleSelect={this.handleSelect}/>
                <FillBracketFirstRoundRegion matchups={region1Matchups} regionId='1' handleSelect={this.handleSelect}/>
                <FillBracketFirstRoundRegion matchups={region2Matchups} regionId='2' handleSelect={this.handleSelect}/>
                <FillBracketFirstRoundRegion matchups={region3Matchups} regionId='3' handleSelect={this.handleSelect}/>
              </div>
              <SecondRoundCol>
                <FillBracketMatchup round='r16' matchupId='1' song1={region0matchup0} song2={region0matchup1} winner={qf_1} nextRound='qf' paddingBottom={paddingBottoms.r16} handleSelect={this.handleSelect}/>
                <FillBracketMatchup round='r16' matchupId='2' song1={region0matchup2} song2={region0matchup3} winner={qf_2} nextRound='qf' paddingBottom={paddingBottoms.r16} handleSelect={this.handleSelect}/>
                <FillBracketMatchup round='r16' matchupId='3' song1={region1matchup0} song2={region1matchup1} winner={qf_3} nextRound='qf' paddingBottom={paddingBottoms.r16} handleSelect={this.handleSelect}/>
                <FillBracketMatchup round='r16' matchupId='4' song1={region1matchup2} song2={region1matchup3} winner={qf_4} nextRound='qf' paddingBottom={paddingBottoms.r16} handleSelect={this.handleSelect}/>
                <FillBracketMatchup round='r16' matchupId='5' song1={region2matchup0} song2={region2matchup1} winner={qf_5} nextRound='qf' paddingBottom={paddingBottoms.r16} handleSelect={this.handleSelect}/>
                <FillBracketMatchup round='r16' matchupId='6' song1={region2matchup2} song2={region2matchup3} winner={qf_6} nextRound='qf' paddingBottom={paddingBottoms.r16} handleSelect={this.handleSelect}/>
                <FillBracketMatchup round='r16' matchupId='7' song1={region3matchup0} song2={region3matchup1} winner={qf_7} nextRound='qf' paddingBottom={paddingBottoms.r16} handleSelect={this.handleSelect}/>
                <FillBracketMatchup round='r16' matchupId='8' song1={region3matchup2} song2={region3matchup3} winner={qf_8} nextRound='qf' paddingBottom={paddingBottoms.r16} handleSelect={this.handleSelect}/>
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
                matchups={allMatchups}
                r16tracks={[region0matchup0, region0matchup1, region0matchup2, region0matchup3, 
                            region1matchup0, region1matchup1, region1matchup2, region1matchup3,
                            region2matchup0, region2matchup1, region2matchup2, region2matchup3,
                            region3matchup0, region3matchup1, region3matchup2, region3matchup3]}
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