import React from 'react';
import useFetch from '../hooks/useFetch';

const UserList = () => {
  const { data: users, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <a href={`/user/${user.id}`}>{user.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default UserList;