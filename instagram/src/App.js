import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({data: dummyData})
    }, 2000)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="instagram">
          <span className="logo">
            <i className="fas fa-camera-retro" />
          </span>
          <span className="line">│</span>
          <span className="title">Insta</span>
        </div>
        <SearchBar />
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
       
          </header>
          {this.state.data.map(dataItem => (
            <PostContainer data={dataItem} key={dataItem.timestamp}/>
          ))}
     </div>
          
        
        
       
      
    );
  }
}

export default App;
