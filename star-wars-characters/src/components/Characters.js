import Character from './Character'

const Characters = ({ characters, onDelete, onToggle }) => {
  return (
    <>
      {characters.map((character, index) => (
        <Character key={index} character={character} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  )
}

export default Characters
