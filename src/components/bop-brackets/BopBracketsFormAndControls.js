import React from 'react';
import BopBracketsControl from './BopBracketsControl';

const inputStyle = {
  textAlign: 'center',
  fontSize: 'x-large'
}

const BopBracketsFormAndControls = ({ handleChange, handleSubmit, handleStartFromScratch, handleModeChange, artist, tracks, errorOccurred }) => {

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col'>
            <label htmlFor='artist'>
              <h4>Artist:</h4>
              {
                tracks.length > 0
                ? <input type='text' id='artist' value={artist} onChange={handleChange} style={inputStyle} disabled />
                : <input type='text' id='artist' value={artist} onChange={handleChange} style={inputStyle} />
              }
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            {
              tracks.length > 0
              ? <input type='submit' className='btn btn-dark btn-lg' value='Generate Bracket' disabled />
              : <input type='submit' className='btn btn-dark btn-lg' value='Generate Bracket' />
            }
          </div>
        </div>
        {
          errorOccurred
          ? <div className='row mt-2'>
              <div className='col-md-4 offset-md-4'>
                <div className='alert alert-warning'>
                  <strong>Error!</strong>  Unable to generate a bracket.  Confirm the artist name and try again.
                </div>
              </div>
            </div>
          : null
        }
      </form>
      <div className='row mt-4'>
        <BopBracketsControl 
          tracks={tracks}
          handleClick={handleModeChange}
          btnValue='printMode'
          btnText='Print it Out'
          btnType='btn-secondary' />
        <BopBracketsControl 
          tracks={tracks}
          handleClick={handleModeChange}
          btnValue='fillMode'
          btnText='Fill it In'
          btnType='btn-secondary' />
        <BopBracketsControl 
          tracks={tracks}
          handleClick={handleStartFromScratch}
          btnText='Start from Scratch'
          btnValue=''
          btnType='btn-danger' />
        </div>
    </div>
  )
}

export default BopBracketsFormAndControls;