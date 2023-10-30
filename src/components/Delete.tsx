import React, { useState } from 'react';
import axios from 'axios';

function Delete() {
  const [userId, setUserId] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/user/${userId}`);
      if (response.status === 200) {
        console.log('User deleted successfully');
        setIsDeleted(true);
      } else {
        console.log('Failed to delete user');
        setIsDeleted(false);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user');
      setIsDeleted(false);
    }
  };

  return (
    <div>
      <h2>Delete User by ID</h2>
      <div>
        <label htmlFor="userId">User ID:</label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button type="button" onClick={handleDelete}>
          Delete User
        </button>
      </div>
      {isDeleted && <p>User deleted successfully!</p>}
    </div>
  );
}

export default Delete;
