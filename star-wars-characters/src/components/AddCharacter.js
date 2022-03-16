import { useState } from 'react'

const AddCharacter = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [mass, setMass] = useState('');
  const [height, setHeight] = useState('');
  const [eye_color, setEye_color] = useState('')
  const [gender, setGender] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      alert('Please add a task')
      return
    }

    onAdd({ name, height, mass, eye_color , gender});

    setName('');
    setMass('');
    setHeight('');
    setEye_color('');
    setGender('');
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Character</label>
        <input
          type='text'
          placeholder='Add Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
        <div className='form-control'>
            <label>Height</label>
            <input
                type='text'
                placeholder='Add Height'
                value={height}
                onChange={(e) => setHeight(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Mass</label>
            <input
                type='text'
                placeholder='Add Mass'
                value={mass}
                onChange={(e) => setMass(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Eye Color</label>
            <select id="#eye-color-select" name='gender' onChange={(e)=>setEye_color(e.target.value)}>
                <option value=''>Select</option>
                <option value='blue'>Blue</option>
                <option value='brown'>Brown</option>
                <option value='green'>Green</option>
                <option value='gray'>Gray</option>
                <option value='red'>Red</option>
                <option value='yellow'>Yellow</option>
                <option value='black'>Black</option>
                <option value='orange'>Orange</option>
            </select>
        </div>
        <div className='form-control'>
            <label>Gender</label>
            <select id="#gender-select" name='gender' onChange={(e)=>setGender(e.target.value)}>
                <option value=''>Select</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </select>
        </div>

      <input type='submit' value='Save Character' className='btn btn-block' />
    </form>
  )
}

export default AddCharacter
