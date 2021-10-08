import {useState, useEffect} from 'react';
import axios from 'axios';
import SingleCharacter from './SingleCharacter';
import {useParams} from 'react-router-dom'

export default () => {
    const [character, setCharacter] = useState({});
    const {id} = useParams()

    console.log("IDDDDD", id)
    useEffect(async ()=>{
        try{
            const characterResponse = await axios({
                url:  `https://swapi.dev/api/people/${id}`}
            )
            setCharacter(characterResponse.data)
        }catch(error){
            console.log(error)
        }
    },[])

    return(
        <section>
            <SingleCharacter character={character}/>
        </section>
    )
}