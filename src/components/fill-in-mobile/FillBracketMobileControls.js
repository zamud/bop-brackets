import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const FillBracketMobileControls = ({ enabled, round, handleRoundIncrement, handleRoundDecrement }) => {
  return (
    <div className='row'>
      {
        round === 1
          ? <div className='col-md-4 offset-md-8 col-sm-6 offset-sm-6 col-6 offset-6'>
              {
                enabled
                ? <button type='button' className='btn btn-outline-dark btn-block btn-lg' onClick={handleRoundIncrement}>Next Round&nbsp;<FontAwesomeIcon icon={faArrowRight}/></button> 
                : <button type='button' className='btn btn-outline-dark btn-block btn-lg' disabled>Next Round&nbsp;<FontAwesomeIcon icon={faArrowRight}/></button> 
              }
            </div> 
          : null
      }
      {
        round > 1 && round < 5
        ? <Fragment>
            <div className='col-md-4 col-sm-6 col-6'>
              <button type='button' className='btn btn-outline-dark btn-block btn-lg' onClick={handleRoundDecrement}>Prev Round&nbsp;<FontAwesomeIcon icon={faArrowLeft}/></button>
            </div>
            <div className='col-md-4 offset-md-4 col-sm-6 col-6'>
              {
                enabled
                ? <button type='button' className='btn btn-outline-dark btn-block btn-lg' onClick={handleRoundIncrement}>Next Round&nbsp;<FontAwesomeIcon icon={faArrowRight}/></button> 
                : <button type='button' className='btn btn-outline-dark btn-block btn-lg' disabled>Next Round&nbsp;<FontAwesomeIcon icon={faArrowRight}/></button> 
              }
            </div>
          </Fragment>
        : null
      }
      {
        round === 5
        ? <div className='col-md-4 col-sm-6 col-6'>
            <button type='button' className='btn btn-outline-dark btn-block btn-lg' onClick={handleRoundDecrement}>Prev Round&nbsp;<FontAwesomeIcon icon={faArrowLeft}/></button>
          </div>
        : null
      }
    </div>
      
  )
}

export default FillBracketMobileControls;