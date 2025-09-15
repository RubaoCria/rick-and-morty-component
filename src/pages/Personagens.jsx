
import { useEffect } from 'react';
import useCharacters from '../hooks/useCharacters';
import CharacterCard from '../components/CharacterCard';

function Personagens() {
  const { characters, loading, getCharacters } = useCharacters();
  
  useEffect(() => {
    getCharacters();
  }, []);
  
  if (loading) {
    return <div>Essa merda ta carregando ainda!</div>;
  }
  
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default Personagens;