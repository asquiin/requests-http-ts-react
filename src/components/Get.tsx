// src/UserInfoForm.tsx
import React, { useState, useEffect } from 'react';
import { IUser } from '../models/models';


function Get() {
  const [userId, setUserId] = useState('');
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);


  const handleUserFetch = () => {
    fetch(`http://localhost:8080/api/user/${userId}`)
      .then((response) => response.json())
      .then((data) => setSelectedUser(data))
      .catch(() => setSelectedUser(null)); 
  };

  return (
    <div>

     
      <div>
        <h2>Get User Information by ID</h2>
        <div>
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <button onClick={handleUserFetch}>Fetch User</button>
        </div>
        {selectedUser && (
          <div>
            <h3>User Information:</h3>
            <p>ID: {selectedUser.id}</p>
            <p>Name: {selectedUser.name}</p>
            <p>Surname: {selectedUser.surname}</p>
            <p>Age: {selectedUser.age}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Get;
