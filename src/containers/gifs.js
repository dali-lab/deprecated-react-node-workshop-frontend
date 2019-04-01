import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getGifs } from '../actions';

class Gifs extends Component {
  componentDidMount() {
    this.props.getGifs();
  }

  renderGifs() {
    return (
      this.props.allGifs.map((gif) => {
        return (
          <li>
            <h4>{gif.title}</h4>
            <div><embed src={gif.embed_url} /></div>
            <p>{gif.trending_datetime}</p>
          </li>
        );
      })
    );
  }

  render() {
    return (
      <div>
        <section>
          <h1>Trending GIFs</h1>
          {this.props.allGifs === null ? <div>Loading</div> : <ul>{this.renderGifs()}</ul>}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allGifs: state.gifs.all,
});

export default withRouter(connect(mapStateToProps, { getGifs })(Gifs));
