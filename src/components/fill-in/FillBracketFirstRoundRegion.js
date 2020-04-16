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

const FillBracketFirstRoundRegion = ({matchups, regionId, handleSelect}) => {
  return (
    <div>
      {
        matchups && matchups.map((matchup) => {
          return (
            <div className='row' key={`region${regionId}matchup${matchups.indexOf(matchup)}`}>
              <BracketRound className='col-md-7 col-sm-6 col-6'>
                <MatchupTop>{matchup[1]}</MatchupTop>
                <MatchupBottom>{matchup[2]}</MatchupBottom>
              </BracketRound>
              <BracketRound className='col-md-5 col-sm-6 col-6'>
                <MatchupForm>
                    <select className='form-control' defaultValue='' id={`region${regionId}matchup${matchups.indexOf(matchup)}`} onChange={handleSelect}>
                      <option value='' disabled>Choose one..</option>
                      <option value={matchup[1]}>{matchup[1]}</option>
                      <option value={matchup[2]}>{matchup[2]}</option>
                    </select>
                </MatchupForm>
              </BracketRound>
            </div>
          )
        })
      }
    </div>
  )
}

export default FillBracketFirstRoundRegion;