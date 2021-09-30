import {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default () => {
    const [list, setList] = useState([]);

    useEffect(async ()=>{
        try{
            const characterListResponse = await axios({
                url:  `https://swapi.dev/api/people`}
            )
            setList(characterListResponse.data.results)
        }catch(error){
            console.log(error)
        }
    },[])

    return(
        <section>
            {list.map((character)=>{
                return (
                    <CharacterCard character={character}/>
                )
            })}
        </section>
    )
}