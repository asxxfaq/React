
import axios from 'axios';
import React, { useState } from 'react'

const AxiosPut = () => {

    const [userId, setUserId] = useState('');
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [message, setNewMessage] = useState('');

    const handleUpdate = async (e) => {
        e.preventDefault();


        const updateData = {
            name: newName,
            email:newEmail
        }
        try {
            const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`,updateData);
            console.log(response.data);
            setNewMessage('User updated Successfully')
            
        } catch (error) {
            setNewMessage('error Updating user')
        }
    }

    return (
        <div>
            <h2>Update User</h2>
            <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    placeholder='User ID to Update'
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)} />

                <br /><br />
                <input
                    type="text"
                    placeholder='Name'
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)} />
                <input
                    type="text"
                    placeholder='Email'
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)} />

                <br /><br />

                <button type='submit'>Update</button>

            </form>
            <p>{message}</p>
        </div>
    )
}

export default AxiosPut
