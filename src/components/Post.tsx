import React, { useState } from 'react';
import axios from 'axios';

function Post() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');

  const handlePost = async (e: React.FormEvent) => { // Add the type for 'e'
    e.preventDefault();

    const newUser = { name, surname, age };

    try {
      const response = await axios.post('http://localhost:8080/api/user', newUser);
      console.log('User added:', response.data);

      // Clear the input fields
      setName('');
      setSurname('');
      setAge('');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  }

  return (
    <div>
      <h2>Add New User</h2>
      <form onSubmit={handlePost}> {/* Use 'onSubmit' for the form to handle form submission */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default Post;
