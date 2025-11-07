import React, { useContext } from 'react'
import { UserAPIContext } from './UserAPIContext'
import { FaUserNinja } from "react-icons/fa6";


const UserList = () => {
    const { users, loading } = useContext(UserAPIContext);

    if (loading) return <p>Loading.....</p>


    return (
        <div>
            <h2><FaUserNinja /> Users</h2>
            <ul>
                {users.map((usr) =>(
                    <li key={usr.id}> {usr.name}= {usr.email}</li>
                ))}
            </ul>
        </div>

    )
}

export default UserList
