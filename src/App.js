import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons:[
      { name: 'Uday' , age: 30},
      { name: 'Hema' , age: 28},
      { name: 'Akash', age: 5},
      { name: 'Ananya', age: 2}
    ]
  }

  switchNameHandler = (newName) =>{
    //console.log('Was clicked!');
    //DON'T DO THIS this.state.persons[0].name ='Sanath';
    this.setState({
      persons:[
        { name: newName , age: 30},
        { name: 'Hema' , age: 28},
        { name: 'Akash', age: 4},
        { name: 'Ananya', age: 2}
      ]
    })
  }



  nameChangedHandler = (event) =>{
    this.setState ({
      persons:[
        { name: 'Uday' , age: 30},
        { name: event.target.value , age: 28},
        { name: 'Akash', age: 4},
        { name: 'Ananya', age: 2}
      ]
    })
  }

  render() {

    const buttonstyle = {
      backgroundColor: '#774e96',
      color: 'White',
      font: 'inherit',
      border: '1px, solid #774e96',
      padding: '8px',
      boxShadow: '0px 2px 2px 2px white',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1> React App</h1>
        <button 
          style ={buttonstyle}
          onClick={this.switchNameHandler.bind(this, 'Rohit')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click= {this.switchNameHandler.bind(this, 'Abhishek')}
          changed ={this.nameChangedHandler}>
          My Hobbies: Cooking
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
