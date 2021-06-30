import React, { useContext } from 'react';
import UserListItem from '../../molecules/UserListItem/UserListItem';
import { StyledList } from './UserList.style';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';

const UserList = () => {
    const { isLoadingState, deleteUser, users } = useContext(UsersContext);
    return (
        <>
            <Title>{isLoadingState ? 'Loading...' : 'Students list'}</Title>
            {!isLoadingState && (
                <StyledList>
                    {users.map((userData) => (
                        <UserListItem
                            userData={userData}
                            deleteUser={deleteUser}
                        />
                    ))}
                </StyledList>
            )}
        </>
    );
};

export default UserList;
