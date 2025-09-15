
function CharacterCard({ character }) {
    return (
      <div style={{
        border: '1px solid #646cff',
        borderRadius: '8px',
        padding: '1rem',
        margin: '0.5rem',
        backgroundColor: '#1a1a1a',
        minWidth: '200px'
      }}>
        <img 
          src={character.image} 
          alt={character.name}
          style={{
            width: '100%',
            borderRadius: '4px',
            marginBottom: '1rem'
          }}
        />
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#646cff' }}>
          {character.name}
        </h3>
        <p style={{ margin: '0.25rem 0', fontSize: '0.9rem' }}>
          <strong>Status:</strong> {character.status}
        </p>
        <p style={{ margin: '0.25rem 0', fontSize: '0.9rem' }}>
          <strong>Espécie:</strong> {character.species}
        </p>
        <p style={{ margin: '0.25rem 0', fontSize: '0.9rem' }}>
          <strong>Gênero:</strong> {character.gender}
        </p>
        <p style={{ margin: '0.25rem 0', fontSize: '0.9rem' }}>
          <strong>Origem:</strong> {character.origin.name}
        </p>
      </div>
    );
  }
  
  export default CharacterCard;