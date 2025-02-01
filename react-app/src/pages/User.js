import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './User.css'; 

const User = () => {
  const { id } = useParams();
  const { data: user = {}, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message || 'Failed to fetch user data'}</div>;

  return (
    <div>
      <h1>{user.name || 'User Not Found'}</h1>
      <p>Email: {user.email || 'N/A'}</p>
      <p>Phone: {user.phone || 'N/A'}</p>
    </div>
  );
};

export default User;