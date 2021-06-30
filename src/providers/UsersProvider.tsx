import { users } from 'data/users';
import React, { useState, useEffect } from 'react';
import { UserProps } from 'types';

const mockAPI = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (users) {
                resolve([...users]);
            } else {
                reject({ message: 'Error' });
            }
        }, 2000);
    });
};

export const UsersContext = React.createContext({});

const UsersProvider = (props) => {
    const [users, setUsers] = useState<UserProps[]>([]);
    const [isLoadingState, setLoadingState] = useState(false);

    useEffect(() => {
        setUsers([]);
        setLoadingState(true);
        mockAPI()
            .then((data) => {
                setLoadingState(false);
                setUsers(data);
            })
            .catch((err) => console.log(err));
    }, []);

    const deleteUser = (name: string) => {
        const filteredUsers = users.filter((item) => item.name !== name);
        setUsers(filteredUsers);
    };

    const handleAddUser = (values: UserProps) => {
        const newUser = {
            name: values.name,
            attendance: values.attendance,
            average: values.average,
        };
        console.log(newUser);
        setUsers([newUser, ...users]);
    };
    return (
        <UsersContext.Provider
            value={{
                users,
                isLoadingState,
                handleAddUser,
                deleteUser,
            }}
        >
            {props.children}
        </UsersContext.Provider>
    );
};

export default UsersProvider;
