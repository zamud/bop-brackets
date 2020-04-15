import React from 'react';
import styled from 'styled-components';

const MatchupForm = styled.form.attrs({
  className: 'col'
})`
border-bottom: 1px solid black;
`

const FillBracketMatchup = ({ round, matchupId, song1, song2, winner, nextRound, paddingBottom, handleSelect }) => {
  return (
    <div className='row' key={`${round}_${matchupId}`} style={{ paddingBottom: paddingBottom }}>
      <MatchupForm>
        {
          song1!=='' && song2!==''
          ? <select className='form-control' defaultValue='' value={winner} id={`${nextRound}_${matchupId}`} onChange={handleSelect}>
              <option value='' disabled>Choose one..</option>
              <option value={song1}>{song1}</option>
              <option value={song2}>{song2}</option>
            </select>
          : <select className='form-control' defaultValue='' id={`${nextRound}_${matchupId}`} disabled />
        }
      </MatchupForm>
    </div>
  )
}

export default FillBracketMatchup;