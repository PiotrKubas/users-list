import React, { useContext, useState } from 'react';
import { Title } from 'components/atoms/Title/Title';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { UsersContext } from 'providers/UsersProvider';
import { UserProps } from 'types';

const initialState: UserProps = {
    name: '',
    attendance: 0,
    average: 0,
};

const AddUser = () => {
    const [formValues, setFormValues] = useState<UserProps>(initialState);
    const context = useContext(UsersContext);
    const handleInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmitUser = () => {
        context.handleAddUser(formValues);
        setFormValues(initialState);
    };

    return (
        <ViewWrapper>
            <Title>Add new student</Title>
            <FormField
                label="Name"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
            />
            <FormField
                label="Attendance (%)"
                id="attendance"
                name="attendance"
                onChange={handleInputChange}
                value={formValues.attendance}
                type="number"
            />
            <FormField
                label="Average"
                id="average"
                name="average"
                value={formValues.average}
                onChange={handleInputChange}
                type="number"
            />
            <Button onClick={() => handleSubmitUser()}>Add</Button>
        </ViewWrapper>
    );
};

export default AddUser;
