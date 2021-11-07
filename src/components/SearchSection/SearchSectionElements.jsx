import styled from 'styled-components';
import { mobile } from "../../responsive";

export const SearchContainer = styled.section`
width:100%;
height:100vh;
display:flex;
align-items: flex-start;
justify-content: space-evenly;
padding:40px 40px;
${mobile(
        {
            
            display:"flex",
            flexWrap:"wrap"
        }
        )}
`;

export const SearchInputInitial = styled.input`
border-bottom:1px solid rgba(27,27,31,0.7);
border-left:none;
border-top:none;
padding:10px 10px;

`;

export const SearchInputSecondary = styled.input`
border-bottom:1px solid rgba(27,27,31,0.7);
border-left:none;
border-top:none;
padding:10px 10px;
`;

export const SearchLabels = styled.label`

`;

export const SearchItems = styled.div`
display:flex;
flex-direction:column;
margin-top:25px;
justify-content: space-between;

`;

export const SearchDiv = styled.div`
margin-top:10px;
`;

export const SearchResultCont = styled.div`
    display:flex;
    flex-direction: column;
    
    
`;



export const SearchResult = styled.li`
    
    
    text-align:right;
    list-style:none;
    cursor:pointer;
    
    
`;

export const SearchResultItem = styled.ul`
    overflow: auto;
    max-height: 300px;
    max-width:100%;
    margin-top:2px;
    margin-left:-25px;

    ::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

${mobile(
        {
            
            maxHeight: "200px",
            marginLeft:"-50px"
        }
        )}
    
    
`;

export const SearchInfo = styled.div`
  
  height:70px;
  padding:10px 10px;
  box-shadow: 8px 7px 7px -4px rgba(0,0,0,0.75);
  -webkit-box-shadow: 8px 7px 7px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: 8px 7px 7px -4px rgba(0,0,0,0.75);
  display:flex;


`;

export const InfoLeft = styled.div`
display:flex;
flex-direction:column;
align-items: flex-start;
justify-content: center;
width:50%;
`;

export const InfoRight = styled.div`
display:flex;
flex-direction:column;
align-items: flex-start;
justify-content: flex-end;
text-align:right;
width:50%;
`;


export const InfoTitle = styled.h3`

`;


export const InfoDesc = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  width:60%;
`;

export const InfoLabel = styled.span`
font-size:10px;
`;
export const InfoDets = styled.span`
font-size:15px;
font-weight:bold;

`;

export const SearchClear = styled.span`
  color:rgba(0,0,0,0.5);
  cursor:pointer;
`



