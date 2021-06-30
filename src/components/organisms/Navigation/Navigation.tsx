import React from 'react';
import {
    Logo,
    StyledLink,
    Wrapper,
} from 'components/organisms/Navigation/Navigation.style';

const Navigation = () => {
    return (
        <Wrapper>
            <Logo />
            <StyledLink to="/" exact>
                Dashboard
            </StyledLink>
            <StyledLink to="/add-user">Add student</StyledLink>
        </Wrapper>
    );
};

export default Navigation;
