import React from 'react';
import { ProgressBar } from 'react-bootstrap';
const Progress = ({ value }) => {
  return (
    <ProgressBar
      animated
      label={`${value}%`}
      now={value}
      style={{ height: '1.5rem', width: '5rem', background: 'white' }}
    />
  );
};

export default Progress;
