import React from 'react';
import styled from 'styled-components';

const CenteredRow = styled.div.attrs({
  className: 'row',
})`
  text-align: center
`

const BopBracketsHeader = () => {
  return (
    <div>
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
    </div>
  )
}

export default BopBracketsHeader;