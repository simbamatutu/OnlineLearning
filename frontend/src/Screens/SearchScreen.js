import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Teacher from '../Components/Teacher';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import Meta from '../Components/Meta';

export const SearchScreen = () => {
  console.log('search');
  return (
    <div>
      <h1>Search</h1>
    </div>
  );
};

export default SearchScreen;
