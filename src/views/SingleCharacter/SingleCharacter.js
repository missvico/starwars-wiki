export default ({character}) => {
    return(
        <div>
            {character.name? 
            <>
            <h2>{character.name}</h2>
            <ul className="single_character_list">
                <li>Height: {character.height}</li>
                <li>Mass: {character.mass}</li>
                <li>Hair Color: {character.hair_color}</li>
                <li>Birth Year: {character.birth_year}</li>
                <li>Gender: {character.gender}</li>
            </ul>
            </>
            :<p>Loading</p>
            }
        </div>
    )
}