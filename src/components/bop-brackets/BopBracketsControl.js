import React from 'react';

const BopBracketsControl = ({ tracks, handleClick, btnValue, btnText, btnType }) => {
       var btnClass=`btn ${btnType} btn-lg btn-block`
       return (
          <div className='mt-1 col-md-4 col-sm-12'>
            {
              tracks.length > 0
              ? <button type='button' value={btnValue} className={btnClass} onClick={handleClick}>{btnText}</button>
              : <button type='button' value={btnValue} className={btnClass} disabled>{btnText}</button>
            }
          </div>
       )
       
          
}

export default BopBracketsControl;
