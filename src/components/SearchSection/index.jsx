import React,{useState,useEffect,useCallback} from 'react';
import axios from 'axios';
import {InfoLeft,
        InfoTitle,
        InfoLabel,
        InfoDets,
        InfoDesc,
        InfoRight,
        SearchContainer,
        SearchInfo,
        SearchInputInitial,
        SearchDiv,
        SearchResult,
        SearchResultItem,
        SearchResultCont, 
        SearchInputSecondary, 
        SearchClear,
        SearchItems, 
        SearchLabels} from './SearchSectionElements';

const SearchSection = () => {
    //THIS IS FOR THE STATES
    const [country,setCountry] = useState([]);
    const [text,setText] = useState('');
    const [suggestion,setSuggestion] = useState([]);
    const [info,setInfo]=useState([]);
    
    useEffect(()=>{
    const loadUsers = async(req,res) =>{
        const response = await axios.get('http://localhost:5000/api/country/');
        const result = response.data.countries;
        setCountry(result);
    }



    loadUsers();
    },[]);

  
    const onChangeHandler = (text) =>{
        let matches = [];
    
        if(text.length>0){
          matches=country.filter(country=>{
            const regex = new RegExp(`${text}`,"gi");
            return country.countryName.match(regex)||country.countryCode.match(regex);
          })
        }
        setSuggestion(matches);
        setText(text);
      }
    
      const onSuggestHandler =(country)=>{
        setText(country.countryName);
        setInfo(country);
        setSuggestion([]);
        
      }

      const inputClear = () =>{
        setText('');
      }

  const debounce = (func) =>{
      let timer;
      return function(...args){
        const context = this;
        if(timer)clearTimeout(timer)
        timer = setTimeout(()=>{
          timer=null
          func.apply(context,args);
        },500)
      }
    }
     
    
    return (
        <SearchContainer id='searches'>
            <SearchItems>
              <SearchInfo>
                  <InfoLeft>
                    <InfoTitle>
                      {info.countryName}
                    </InfoTitle>
                    <InfoDesc>
                    <InfoLabel>
                      CODE:
                    </InfoLabel>
                    <InfoDets>
                      {info.countryCode}
                    </InfoDets>
                    </InfoDesc>
                  </InfoLeft>
                  <InfoRight>
                    <InfoDesc>
                    
                    <InfoLabel>
                      CURRENCY:
                    </InfoLabel>
                    <InfoDets>
                    {info?info.currencyCode:``}
                    </InfoDets>
                    </InfoDesc>
                    <InfoDesc>
                    
                    <InfoLabel>
                      POPULATION:
                    </InfoLabel>
                    <InfoDets>
                    {info?info.population:``}
                    </InfoDets>
                    </InfoDesc>
                    <InfoDesc>
                      
                      <InfoLabel>
                      CAPITAL:
                    </InfoLabel>
                    <InfoDets>
                    {info?info.capital:``}
                    </InfoDets>
                    </InfoDesc>

                  </InfoRight>
              </SearchInfo>
              <SearchDiv>
              <SearchLabels>
                INPUT COUNTRY NAME
              </SearchLabels>
              <SearchInputInitial type="text" onChange={e=>onChangeHandler(e.target.value)} value={text}/>
              <SearchClear onClick={inputClear}>
              &#10005;
              </SearchClear>
              </SearchDiv>
              <SearchDiv>
                <SearchResultCont>
                <SearchResultItem >
                  {suggestion.map(country=>{
                    return (
                      <SearchResult key={country.countryCode} onClick={()=>onSuggestHandler(country)}>
                        {country.countryName}
                      </SearchResult>
                    )
                  })}
                  </SearchResultItem>
                </SearchResultCont>
              </SearchDiv>
            </SearchItems>

           
            <SearchItems>
              <SearchInfo>
                  <InfoLeft>
                    <InfoTitle>
                      {info.countryName}
                    </InfoTitle>
                    <InfoDesc>
                    <InfoLabel>
                      CODE:
                    </InfoLabel>
                    <InfoDets>
                      {info.countryCode}
                    </InfoDets>
                    </InfoDesc>
                  </InfoLeft>
                  <InfoRight>
                    <InfoDesc>
                    
                    <InfoLabel>
                      CURRENCY:
                    </InfoLabel>
                    <InfoDets>
                    {info?info.currencyCode:``}
                    </InfoDets>
                    </InfoDesc>
                    <InfoDesc>
                    
                    <InfoLabel>
                      POPULATION:
                    </InfoLabel>
                    <InfoDets>
                    {info?info.population:``}
                    </InfoDets>
                    </InfoDesc>
                    <InfoDesc>
                      
                      <InfoLabel>
                      CAPITAL:
                    </InfoLabel>
                    <InfoDets>
                    {info?info.capital:``}
                    </InfoDets>
                    </InfoDesc>

                  </InfoRight>
              </SearchInfo>
              <SearchDiv>
              <SearchLabels>
                INPUT COUNTRY NAME
              </SearchLabels>
              <SearchInputInitial type="text" onChange={e=>onChangeHandler(e.target.value)} value={text}/>
              <SearchClear onClick={inputClear}>
              &#10005;
              </SearchClear>
              </SearchDiv>
              <SearchDiv>
                <SearchResultCont>
                <SearchResultItem >
                  {suggestion.map(country=>{
                    return (
                      <SearchResult key={country.countryCode} onClick={()=>onSuggestHandler(country)}>
                        {country.countryName}
                      </SearchResult>
                    )
                  })}
                  </SearchResultItem>
                </SearchResultCont>
              </SearchDiv>
            </SearchItems>


        </SearchContainer>
    )
}

export default SearchSection
