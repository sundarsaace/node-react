import React, { Component } from 'react';
import './app.css';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';


export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <div className="chart-section">
          <LineChart />
          <BarChart />
        </div>
      </div>
    );
  }
}
