import './App.css';
import { useEffect, useState } from 'react';
import PersonAdd from './components/PersonAdd';
import phoneService from './services/phone';
import List from './components/list';
import Notification from './components/Notifications'
import Filter from './components/Filter';

function App() {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [persons, setPersons] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [filter, setFilter] = useState('')


  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value);


  const addPerson = (e) => {
    e.preventDefault();
    if (!newName || !newNumber) return;
    const exist = persons.find(person => person.name === newName);
    if (exist) {
      if (window.confirm(`${newName} is already added to phoneBook\n Update the number with new one?`)) {
        const updated = { ...exist, number: newNumber };
        phoneService.update(exist.id, updated).then(updatedPerson => {
          setPersons(persons.map(person => person.id !== exist.id ? person : updatedPerson));
          setNewName('');
          setNewNumber('');
        }).catch((err) => {
          setErrorMessage(err.response.data["error"])
          setTimeout(() => {
            setErrorMessage(null)
          }, 10000)
        })
      }
    } else {
      const p = { name: newName, number: newNumber }
      phoneService
        .create(p).then(phone => {
          setPersons(persons.concat(phone));
          setErrorMessage(`${phone.name} added`);
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setNewName('');
          setNewNumber('');
        })
        .catch((err) => {
          setErrorMessage(err.response.data["error"])
          setTimeout(() => {
            setErrorMessage(null)
          }, 10000)
        })
    }
  }

  const deletePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      phoneService.deletePerson(person.id).then(data => {
        setPersons(persons.filter((p) => p.id !== person.id))
      }).catch(error => {
        console.log('here');

        setErrorMessage(`'${person.name}' was already removed from server`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setPersons(persons.filter(p => p.id !== person.id))
      })
    }
  }

  useEffect(() => {
    phoneService.getAll().then((data) => {
      setPersons(data);
    })
  }, [])
  const handleFilterChange = (event) => setFilter(event.target.value)

  return (
    <div className="App">
      <h1>Phone Book</h1>
      <Notification message={errorMessage} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonAdd api={addPerson} name={newName} number={newNumber} handleNumber={handleNumberChange} handleName={handleNameChange} />
      <h3>Numbers</h3>
      <List deleterPerson={deletePerson} filter={filter} persons={persons} />
    </div>
  );
}

export default App;
