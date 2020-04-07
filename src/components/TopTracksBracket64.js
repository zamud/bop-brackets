import React from 'react';

const TopTracksBracket64 = ({tracks}) => {

  return (
    <div>
      {
        tracks.map((track) => {
          return <p>{track.name}</p>
        })
      }
    </div>
  )
}

export default TopTracksBracket64;
