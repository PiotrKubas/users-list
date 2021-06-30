import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.style';

const MainTemplate = (props) => {
    return (
        <Wrapper>
            <Navigation />
            {props.children}
        </Wrapper>
    );
};

export default MainTemplate;
