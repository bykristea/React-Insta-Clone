import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      search: '',
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({data: dummyData})
    }, 1000)
  }

  handleInput = (event) => {
    event.preventDefault();
    console.log(event.target)
    this.setState({
      [event.target.name]: event.target.value,
    })
    console.log("handleInput setState: ", this.state.search)
  }

  filterUsernames = (event) => {
    event.preventDefault();
    let search = [...this.state.data];
    search = search.filter(data => {
      if(data.username === this.state.search) {
        console.log('returning data')
        return data;
      } else {
        console.log('returning nothing');
        return;
      }
    })
    this.setState({
      data: search
    })
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
        <SearchBar 
          data={this.state.data} 
          handleInput={this.handleInput}
          filterUsernames={this.filterUsernames}
          search={this.state.search}
        />
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
