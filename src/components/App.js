import React, { Component } from 'react';
import Counter from './Counter';
import Gifs from './Gifs';

import './../styles/App.css';
import axios from 'axios';

const API_URL = 'http://localhost:9090';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      peopleInfo: []
    }
  }

  render() {
    return (
      <div className="App">
        <div id="content">
          <h1>People At The Workshop:</h1>
          <ul>
            {this.state.peopleInfo}
          </ul>
          <Counter />
          <Gifs />
        </div>
      </div>
    );
  }

  componentWillMount() {
    this.getPeopleInfo();
  }

  getPeopleInfo() {
    axios.get(API_URL).then((response) => {
      var peopleInfo = [];

      for (var obj in response.data) {
        peopleInfo.push(
          <li key={obj}>{response.data[obj].name + " '" + response.data[obj].classYear}</li>
        );
      }

      this.setState({
        peopleInfo: peopleInfo
      });

    }).catch((error) => {
      console.log(error);
    });
  }
}

export default App;
