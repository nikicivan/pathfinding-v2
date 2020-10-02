import styled from 'styled-components';

export const MapSizeContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MapSizeInput = styled.input`
    margin-left: .5rem;
    background-color: whitesmoke;
    outline-width: 0;
    border:none;
    color: black;
    text-align: center;
    font-size: large;
    box-shadow: 0 10px 5px 0 rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    height: 2rem;
`;

export const MapSizeForm = styled.form`
    display: flex;
    @media (max-width: 768px) {
        display: block;
    }
`;

export const MapSizeButton = styled.button`
    width: 5rem;
    background-color: #3f51b5;
    border-radius: 5px;
    height: 2rem;
    margin-left: 1rem;
    color: white;
    cursor: pointer;
    display: none;
    @media (max-width: 768px) {
        display: inline-block;
    }
`;
