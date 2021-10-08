import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default () => {
    const [list, setList] = useState([]);

    useEffect(async ()=>{
        try{
            const characterListResponse = await axios({
                url:  `https://swapi.dev/api/people`}
            )
            setList(characterListResponse.data.results)
            console.log(characterListResponse.data.results)
        }catch(error){
            console.log(error)
        }
    },[])

    return(
        <section>
            {list.map((character)=>{
                let id = character.url.split("/")[5]
                return (
                    <p><Link to={`/characters/${id}`} >{character.name}</Link></p>
                )
            })}
        </section>
    )
}