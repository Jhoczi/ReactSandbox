import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Characters from './components/Characters'
import AddCharacter from './components/AddCharacter'
import About from './components/About'

const App = () => {
  const [showAddCharacter, setShowAddCharacter] = useState(false)
  const [characters, setCharacters] = useState([])

  const [height,setHeight] = useState('');
  const [mass, setMass] = useState('');

  useEffect(() => {
    const getCharacters = async () => {
      const charactersFromServer = await fetchCharacters()
      setCharacters(charactersFromServer)
    }

    getCharacters()
  }, [])

  // Fetch Characters
  const fetchCharacters = async () => {
    const res = await fetch('http://localhost:5000/characters')
    const data = await res.json()

    return data
  }

  // Fetch Character
  const fetchCharacter = async (id) => {
    const res = await fetch(`http://localhost:5000/characters/${id}`)
    const data = await res.json()

    return data
  }

  // Add Character
  const addCharacter = async (character) => {
    const res = await fetch('http://localhost:5000/characters', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(character),
    })

    const data = await res.json();
    
    setCharacters([...characters, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  // Delete Character
  const deleteCharacter = async (id) => {
    const res = await fetch(`http://localhost:5000/characters/${id}`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
        ? setCharacters(characters.filter((character) => character.id !== id))
        : alert('Error Deleting This Character')
  }

  const setHeightFilter = (value) => {
    setHeight(value);
    filterCharacters(value,null);
  };
  const setMassFilter = (value) => {
    setMass(value);
    filterCharacters(null,value);
  };
  const filterCharacters = (height,mass) => {
    return characters.filter((character)=> {
      return (!height || character.height >= height) && (!mass || character.mass >= mass);
    });
  };

  return (
      <Router>
        <div className='container'>
          <Header
              onAdd={() => setShowAddCharacter(!showAddCharacter)}
              showAdd={showAddCharacter}
          />
          <Routes>
            <Route
                path='/'
                element={
                  <>
                    {showAddCharacter && <AddCharacter onAdd={addCharacter} />}
                    {<form className='filter-form'>
                      <div className='form-control'>
                        <label> Height ></label>
                        <input
                            type='number'
                            min={0}
                            placeholder='Insert value filter'
                            value = {height}
                            onChange={(e)=>setHeightFilter(+e.target.value)}
                        />
                      </div>
                      <div className='form-control'>
                        <label> Mass ></label>
                        <input
                            type='number'
                            min={0}
                            placeholder='Insert value filter'
                            value = {mass}
                            onChange={(e)=>setMassFilter(+e.target.value)}
                        />
                      </div>
                    </form>}

                    {characters.length > 0 ? (
                        <Characters
                            characters={filterCharacters(height,mass)}
                            onDelete={deleteCharacter}
                        />
                    ) : (
                        'No Characters To Show'
                    )}
                  </>
                }
            />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
  )
}



export default App
