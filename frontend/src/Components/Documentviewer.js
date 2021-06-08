import React from 'react';

export const Documentviewer = () => {
  return (
    <div className='container'>
      <object
        style={{ width: '100%', height: '100%' }}
        data='https://www.site.uottawa.ca/~bochmann/SEG3101/Notes/SEG3101-ch3-1%20-%20Intro%20to%20Analysis%20and%20Specification.pdf'
        type='application/pdf'
      >
        {' '}
      </object>
    </div>
  );
};

export default Documentviewer;
