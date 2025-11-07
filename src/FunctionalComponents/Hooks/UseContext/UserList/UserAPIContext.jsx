import { createContext, useEffect, useState } from "react";

export const UserAPIContext = createContext();

export const UserAPIProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.error('Error Fetching', error);
            } finally {
                setLoading(false);
            }
        }
        fetchUser();
    }, [])

    return (
        <UserAPIContext.Provider value={{users,loading}}>
            {children}
        </UserAPIContext.Provider>
    )
}