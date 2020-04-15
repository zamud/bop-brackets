import React from 'react';

const BopBracketsControl = ({ tracks, handleClick, btnValue, btnText, btnType }) => {
       var btnClass=`btn ${btnType} btn-lg btn-block`
       return (
          <div className='col'>
            {
              tracks.length > 0
              ? <button type='button' value={btnValue} className={btnClass} onClick={handleClick}>{btnText}</button>
              : <button type='button' value={btnValue} className={btnClass} disabled>{btnText}</button>
            }
          </div>
       )
       
          
}

export default BopBracketsControl;
