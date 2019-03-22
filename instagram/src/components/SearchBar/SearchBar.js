import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

 const Header = styled.header `
    border-bottom: 1px solid #3333;
    height: 60px;
    display: flex;
 `;

 const LogoHeader = styled.div`

`;

const LogoImage = styled.div`
  
`;

const Divider = styled.span`
 
`;

const InputWrapper = styled.div`

`;

const SearchInput = styled.input`
  height: 30px;
  width: 300px;
  text-align: center;
  margin-right: 20px;
`;

const IconsWrapper = styled.div`
  
`;
const SearchIcon = styled.i`
  
`;

const Search = (props) => {
 return (
    
       
        <Header>
        <LogoHeader>
          <LogoImage>
            <i className="fas fa-camera-retro" />
          </LogoImage>
          <Divider>│</Divider>
          <LogoImage>Insta</LogoImage>
        </LogoHeader>

        <SearchInput type="text" name='searchPosts' value={props.text} onChange={ props.changed} placeholder="🔍 Search" />

        <IconsWrapper>
          <i className="far fa-compass" />
          <i className="far fa-heart" />
          <i className="far fa-user" />
        </IconsWrapper>
      </Header>
      
  )
}

Search.propTypes = {
  props: PropTypes.object
}


  export default Search;