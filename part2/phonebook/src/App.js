import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect (() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  },[])
  
  console.log('render', persons.length, 'persons')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const nameExists = persons.some((person) => person.name.toLowerCase() === newName.toLowerCase())
    
    if (nameExists) {
      window.alert(`${newName} is already in the phonebook`)
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      }

      personService
        .create(nameObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
    }
    
  }

  const handleDelete = (id) => {
    personService
      .deletePerson(id)
      .then(() => {
        const updatedPersons = persons.filter(person => person.id !== id).map((person, index) => {
          return {
            ...person,
            id: index + 1
          };
        });

        setPersons(updatedPersons)
        console.log(`Phonebook entry No ${id} will be deleted`)
      })
      .catch(error => {
        console.log('Error deleting person:', error)
      })
  }


  const personsToShow = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <NewPerson addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <Number personsToShow={personsToShow} handleDelete={handleDelete}/>
    </div>
  )
}


  const Number = ({personsToShow, handleDelete}) => {
    const onDelete = (id) => {
      handleDelete(id);
    }
    return (
      <div>
        <h2>Numbers</h2>
        <ul>
        {personsToShow.map(person => 
        (<li key={person.id}>
          {person.name} {person.number}  
          <button onClick={() => onDelete(person.id)}>delete</button>
          </li>
        ))}
      </ul>
      </div>
    )
  }

  const Filter = ({filter, handleFilterChange}) => {
    return(
      <div>
        <h2>Phonebook</h2>
        <div>
          filter shown with{' '} 
          <input value={filter} onChange={handleFilterChange} />
        </div>
      </div>

    )
  }
  const NewPerson = ({addPerson, newName, newNumber, handleNameChange, handleNumberChange}) => {
    return(
      <div>
        <h2>add a new</h2>
        <form onSubmit={addPerson}>
          <div>
            name: <input value={newName} onChange={handleNameChange}/>
          </div>
          <div>
            number: <input value={newNumber} onChange={handleNumberChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
    )
  }
export default App