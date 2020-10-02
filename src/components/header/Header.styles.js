import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;  
    margin: 1rem; 
    @media (max-width: 768px) {
        flex-direction: column;       
        padding-top: 1rem;
    }
`;

export const HeaderTitle = styled.div`
    flex: 1;
    margin-left: 1rem;
    align-items: center;    
`;

export const HeaderTitleH1 = styled.h1`
    @media (max-width: 768px) {
        text-align: center;       
    }
`;

export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 768px) {
        flex-direction: column;        
    }
`;

export const HeaderMapSize = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        flex-direction: column;        
    }
`;
