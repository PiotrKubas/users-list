import React from 'react';
import { Wrapper, StyledInfo, ItemContent } from './UserListItem.style';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import { Average } from 'components/atoms/Average/Average';

const UserListItem = ({
    userData: { average, name, attendance },
    deleteUser,
}) => {
    return (
        <Wrapper>
            <Average value={average}>{average}</Average>
            <ItemContent>
                <StyledInfo>
                    <p>{name}</p>
                    <p>{attendance}</p>
                </StyledInfo>
                <DeleteButton name={name} deleteUser={deleteUser} />
            </ItemContent>
        </Wrapper>
    );
};

export default UserListItem;
