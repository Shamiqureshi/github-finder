import React,{ Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
        React.createElement('div',{className:'App'},
        React.createElement('h1', {}, 'My favorite ice cream flavors'),
        React.createElement('ul', {},
      [
        React.createElement('li', {}, 'Chocolate'),
        React.createElement('li', {}, 'Vanilla'),
        React.createElement('li', {}, 'Banana')
      ]
        )
))
  }
}

export default App
