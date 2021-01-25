import React from 'react';
import courses from '../Course';

export default function Courseware({ match }) {
  const course = courses.find((c) => c._id === match.params.id);
  console.log(course.name);
  return (
    <div>
      <p> wwqw</p>
    </div>
  );
}
