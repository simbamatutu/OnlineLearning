import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const Searchbox = ({ history }) => {
  const [keyword, setKeyword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };
  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='searchbox'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search...'
        className='sm-2 ml-sm-5'
      ></Form.Control>
    </Form>
  );
};
export default Searchbox;
