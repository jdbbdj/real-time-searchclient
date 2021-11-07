import styled from 'styled-components';



export const HomeContainer = styled.div`
    width:100%;
    height:100%;
    border:1px solid black;
    background:rgba(27,27,31);
    display:flex;
    align-items: center;
    
`;

export const HomeWrapper = styled.div`
    display:flex;
    
    justify-content: center;
    width:100%;
    align-items: center;

    
`;

export const HomeInfo = styled.div`
    
    flex:1;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    
`;

export const HomeDets = styled.div`
display:flex;
flex-direction:column;

text-align:left;
padding:10px 10px;
`;

export const HomeTitle = styled.h1`
    color:white;
`;

export const HomeDesc = styled.span`
    color:white;
`;

export const HomeDiv = styled.div`
    
    display:flex;
    justify-content: center;
    border:none;
`;

export const HomeButton = styled.button`
    border:none;
    padding:15px 15px;
    width:150px;
    cursor:pointer;
    border-radius:5px;
    background:white;
`;

export const HomeTerrain = styled.div`
    flex:3;
    height:650px;
    width:650px;
`;