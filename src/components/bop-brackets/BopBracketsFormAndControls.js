import React from 'react';
import BopBracketsControl from './BopBracketsControl';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFBracket from '../pdf/PDFBracket';

const inputStyle = {
  textAlign: 'center',
  fontSize: 'x-large'
}

const BopBracketsFormAndControls = ({ handleChange, handleSubmit, handleStartFromScratch, handleModeChange, artist, matchups, errorOccurred }) => {

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col'>
            <label htmlFor='artist'>
              <h4>Artist:</h4>
              {
                matchups.length > 0
                ? <input type='text' id='artist' value={artist} onChange={handleChange} style={inputStyle} disabled />
                : <input type='text' id='artist' value={artist} onChange={handleChange} style={inputStyle} />
              }
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            {
              matchups.length > 0
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
        <div className='mt-1 col-md-4 col-sm-12'>
          {
            matchups.length === 0
            ? <button type='button' className='btn btn-lg btn-block btn-secondary' disabled>Download Blank</button>
            : <PDFDownloadLink
                className='btn btn-lg btn-block btn-secondary' 
                document={<PDFBracket matchups={matchups}/>}
                fileName={`bopbracket-blank-${artist}.pdf`}>
                {({ blob, url, loading, error }) => (loading ? 'Loading bracket...' : 'Download Blank')}
              </PDFDownloadLink>
          }
        </div>
        <BopBracketsControl 
          matchups={matchups}
          handleClick={handleModeChange}
          btnValue='fillMode'
          btnText='Fill it In'
          btnType='btn-secondary' />
        <BopBracketsControl 
          matchups={matchups}
          handleClick={handleStartFromScratch}
          btnText='Start from Scratch'
          btnValue=''
          btnType='btn-danger' />
        </div>
    </div>
  )
}

export default BopBracketsFormAndControls;