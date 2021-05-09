import React from 'react';
import ReactPlayer from 'react-player';
const Videoplayer = ({ url }) => {
  return (
    <div
      className='player-wrapper'
      style={{ position: 'relative', paddingTop: '56.25%' }}
    >
      <ReactPlayer
        className='react-player'
        style={{ position: 'absolute', top: '0', left: '0' }}
        url={url}
        controls={true}
        width='100%'
        height='100%'
      />
    </div>
  );
};

export default Videoplayer;
