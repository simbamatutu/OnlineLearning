import React, { useState } from 'react';

const CourseDescription = () => {
  const [Description, setDescription] = useState('');
  return (
    <div>
      <p>Markdown format supported!</p>
      <textarea
        style={{
          width: '100%',
          minHeight: '40vh',
          padding: '20px',
          outline: 'none',
        }}
        autoFocus
        value={Description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
    </div>
  );
};

export default CourseDescription;
