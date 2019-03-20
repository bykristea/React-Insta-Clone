import React, { Component } from 'react';
import dummyData from './dummy-data';
import Posts from './components/PostContainer/PostsPage';
import Search from './components/SearchBar/SearchBar';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
      searchPosts: '',
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({data: dummyData})
    }, 1000)
  }



  changeHandler = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  search = (event) => {

  }



  render() {
    return (
      <div className="App">
         <Search text={this.state.searchPosts} search={this.search} changed={this.changeHandler} />

        {this.state.data ? <Posts data={this.state.data} search={this.state.searchPosts} /> : <h2>Loading...</h2>}
     </div>
          
        
        
       
      
    );
  }
}

export default App;
