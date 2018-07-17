import React, { Component } from 'react';
import data from './data.json' 
import JobsTable from './JobsTable'

class App extends Component {
  render() {
    return (
      <div className="App">
      <JobsTable data={data} />
      </div>
    );
  }
}

export default App;
