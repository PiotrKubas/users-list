import React from 'react';
import UserList from '../components/organisms/UserList/UserList';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const Dashboard = () => (
    <ViewWrapper>
        <UserList />
    </ViewWrapper>
);

export default Dashboard;
