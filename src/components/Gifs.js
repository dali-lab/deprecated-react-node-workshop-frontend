import React, { Component } from 'react';
import './../styles/Gifs.css';
import axios from 'axios';

const API_URL = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifInfo: []
    }
  }

  render() {
    return (
      <div id="gifs">
        <h2>All the gifs:</h2>
        <ul>
        {this.state.gifInfo}
        </ul>
      </div>
    );
  }

  componentWillMount() {
    this.getGifInfo();
  }

  getGifInfo() {
    axios.get(API_URL).then((response) => {
      var gifInfo = [];

      for (var i=0; i<5; i++) {
        gifInfo.push(
            <li key={i}><embed src={response.data.data[i].embed_url} /></li>
          );
      }

      this.setState({
        gifInfo: gifInfo
      });

    }).catch((error) => {
      console.log(error);
    });
  }
}

export default App;
