import React from 'react';
import styleUtils from '../../utils/styleUtils';

const BopBracketsHeader = () => {
  return (
    <div>
      <styleUtils.CenteredRow>
        <div className='col'>
          <h2>Bop Brackets</h2>
        </div>
      </styleUtils.CenteredRow>
      <styleUtils.CenteredRow>
        <div className='col'>
          <strong>Enter an artist.  Build a bracket.  Crown the top track.</strong>
        </div>
      </styleUtils.CenteredRow>
    </div>
  )
}

export default BopBracketsHeader;