import React from 'react';

const inputStyle = {
  textAlign: 'center',
  fontSize: 'x-large'
}

const TopTracksForm = ({ handleChange, handleSubmit, artist, tracks }) => {

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
      </form>
    </div>
  )
}

export default TopTracksForm;