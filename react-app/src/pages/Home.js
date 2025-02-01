import React from 'react';
import SearchBar from '../components/SearchBar';
import UserList from '../components/UserList'; 

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <SearchBar />
      <UserList />
    </div>
  );
};

export default Home;