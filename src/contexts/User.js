import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ nama: '', hobi: '' });

    const saveUserData = (data) => {
        setUser(data);
    };

    return (
        <UserContext.Provider value={{ user, saveUserData }}>
            {children}
        </UserContext.Provider>
    );
};
