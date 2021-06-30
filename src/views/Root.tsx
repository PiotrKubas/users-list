import React from 'react';
import AddUser from './AddUser';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../assets/styles/globalStyle';
import { theme } from '../assets/styles/theme';
import MainTemplate from 'components/templates/MainTemplate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import UsersProvider from 'providers/UsersProvider';

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.lightgray};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const Root = () => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <MainTemplate>
                    <UsersProvider>
                        <Wrapper>
                            <Switch>
                                <Route path="/" exact>
                                    <Dashboard />
                                </Route>
                                <Route path="/add-user">
                                    <AddUser />
                                </Route>
                            </Switch>
                        </Wrapper>
                    </UsersProvider>
                </MainTemplate>
            </ThemeProvider>
        </Router>
    );
};

export default Root;
