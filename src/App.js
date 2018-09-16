import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons:[
      { Id: '1245', name: 'Uday' , age: 30},
      { Id: '7896', name: 'Hema' , age: 28},
      { Id: '4563', name: 'Akash', age: 5},
      { Id: '1596', name: 'Ananya', age: 5}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) =>{
      //const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState ({persons:persons})
  }

  nameChangedHandler = (event, id) =>{

    const personIndex = this.state.persons.findIndex(p =>{
      return p.Id === id
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState ({ persons:persons })
  }

  togglePersonHandler = () =>{
      const doesShow = this.state.showPersons;
      this.setState({
        showPersons: !doesShow
      })
  }

  render() {

    let Persons = null;
    let btnClass = '';

    if(this.state.showPersons){
      Persons = (        
          <div>
            {this.state.persons.map((person, index) =>{
              return (
                  <Person 
                    click = {() =>this.deletePersonHandler(index)}
                    name= {person.name}
                    age = {person.age}  
                    key = {person.Id}                    
                    changed = {(event) => this.nameChangedHandler(event, person.Id)}
                    />
                )
            })}
        </div>         
      )
    btnClass = classes.Red;       
    };

    const style = [];
    if(this.state.persons.length<=2){
      style.push (classes.red);
    }
    if(this.state.persons.length<=1){
      style.push (classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1> React App</h1>
          <p className ={style.join(' ')}>This is really working</p>
          <button 
            className ={btnClass}
            onClick={this.togglePersonHandler}>Toggle Person</button>            
            {Persons}
        </div>
    );
  }
}

export default App;

