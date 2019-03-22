import React from 'react';
import PropTypes from 'prop-types';
import logo from './../../img/Instagram_logo.png';
import camera from './../../img/camera-retro-solid.svg';
import styled from 'styled-components';

 const Header = styled.header `
    border-bottom: 1px solid #3333;
    height: 60px;
    display: flex;
    align-items: center;
    
 `;

 const LogoHeader = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  margin-left: 10px;
`;

const LogoImage = styled.div`
  
`;

const Divider = styled.span`
  height: 30px;
`;

const InputWrapper = styled.div`

`;

const SearchInput = styled.input`
  height: 30px;
  width: 300px;
  text-align: center;
  margin-left: 70px;
  margin-right: 70px;
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

    i {
      margin: 0 10px;
    }
`;
const SearchIcon = styled.i`
  
`;

const Search = (props) => {
 return (
    
       
        <Header>
        <LogoHeader>
          <LogoImage>
            <img src={camera} width="20px"/>
          </LogoImage>
          <Divider>│</Divider>
          <img src={logo} width="100px"/>
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