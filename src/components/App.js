import React, { Component } from 'react'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'max', age: 28 },
      { name: 'Brian', age: 45 },
      { name: 'Molly', age: 5 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Brian', age: 45 },
        { name: 'Molly', age: 2 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'max', age: 28 },
        { name: event.target.value, age: 45 },
        { name: 'Molly', age: 2 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render () {
    const style = {
      backgroundColor: '#fff',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={() => this.switchNameHandler()}
            changed={this.nameChangedHandler}>
                My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      )
    }

    return (
      <div className='app'>
        <h1>Hell Bdog</h1>
        <h1>How Are You</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    )
  }
}

export default App
