import React from 'react';
import { StyledButton } from './DeleteButton.style';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete-icon.svg';

const DeleteButton = ({ name, deleteUser }) => (
    <StyledButton onClick={() => deleteUser(name)}>
        <DeleteIcon />
    </StyledButton>
);

export default DeleteButton;
