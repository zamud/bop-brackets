import React from 'react';

const FillBracketChampCard = ({ champ }) => {
  return (
    <div className='row card mt-4 bg-dark text-white text-center'>
      <div className='card-body'>
        <h4 className='card-title'>CHAMPION:</h4>
        {
          champ !== ''
          ? <strong>{champ}</strong>
          : <strong>---</strong>
        }
      </div>
    </div>
  )
}

export default FillBracketChampCard;