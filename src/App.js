import React,{ Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    const Name = 'John Doe';
    const loading = true;
    const Nobody = 'anyone is there!';
    return (
        <div className='App'>
          <h1>My App</h1>
          {loading ? <h4>Loading...</h4>:<h4>{Name}</h4>}
        </div>
        )
  }
}

export default App
