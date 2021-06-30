import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    width: 25%;
    max-width: 600px;
    min-width: 280px;
    padding: 40px 30px;
    border-radius: 25px;
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.3);
`;

export const StyledList = styled.ul`
    margin: 0;
    padding: 0;
    max-height: 400px;
    min-width: 250px;
    overflow-y: scroll;
`;

export const ListWrapper = styled.div`
    height: 100%;
`;
