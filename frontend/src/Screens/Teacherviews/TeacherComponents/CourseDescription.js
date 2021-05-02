const CourseDescription = ({ ...props }) => {
  return (
    <div>
      <p className='text-muted'>Markdown format supported!</p>
      <textarea
        style={{
          width: '100%',
          minHeight: '40vh',
          padding: '20px',
          outline: 'none',
        }}
        autoFocus
        onChange={(event) => props.changeOverview(event.target.value)}
        value={props.overview}
      ></textarea>
    </div>
  );
};

export default CourseDescription;
