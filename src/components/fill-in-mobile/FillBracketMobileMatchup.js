import React from 'react';
import styled from 'styled-components';

const BracketRound = styled.div.attrs({})`
  padding-left: 0px !important;
  padding-right: 0px !important;
`
const MatchupTop = styled.div.attrs({})`
  border-bottom: 1px solid black;
`
const MatchupBottom = styled.div.attrs({})`
  padding-top: 10px;
  margin-bottom: 30px;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
`
const MatchupForm = styled.form.attrs({})`
border-bottom: 1px solid black;
`

const FillBracketMobileMatchup = ({ round, matchupId, song1, song2, winner, nextRound, handleSelect}) => {
  return (
    <div className='row' key={`${round}_${matchupId}`}>
      <BracketRound className='col-md-7 col-sm-7 col-7'>
        <MatchupTop>{song1}</MatchupTop>
        <MatchupBottom>{song2}</MatchupBottom>
      </BracketRound>
      <BracketRound className='col-md-5 col-sm-5 col-5'>
        <MatchupForm>
            <select className='form-control' value={winner} id={`${nextRound}_${matchupId}`} onChange={handleSelect}>
              <option value='' disabled>Choose one..</option>
              <option value={song1}>{song1}</option>
              <option value={song2}>{song2}</option>
            </select>
        </MatchupForm>
      </BracketRound>
    </div>
  )
}

export default FillBracketMobileMatchup;