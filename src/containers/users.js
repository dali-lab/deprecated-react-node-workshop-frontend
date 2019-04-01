import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getResponse } from '../actions';

class Users extends Component {
  componentDidMount() {
    this.props.getResponse();
  }

  renderUsers() {
    return (
      this.props.allUsers.map((user) => {
        return (
          <div>
            <ul>
              <li>
                {user.name}
                <span>&nbsp;</span>
                {user.classYear}
                <span>&nbsp;</span>
                {user.message}
              </li>
            </ul>
          </div>
        );
      })
    );
  }

  render() {
    return (
      <div>
        <section>
          <h1>User list</h1>
          <div>{this.renderUsers()}</div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allUsers: state.users.all,
});

export default withRouter(connect(mapStateToProps, { getResponse })(Users));
