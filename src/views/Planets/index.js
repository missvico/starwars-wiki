import {useState, useEffect} from 'react';
import axios from 'axios';

export default () => {
    const [list, setList] = useState([]);

    useEffect(async ()=>{
        try{
            const planetListResponse = await axios({
                url:  `https://swapi.dev/api/planets`}
            )
            setList(planetListResponse.data.results)
        }catch(error){
            console.log(error)
        }
    },[])

    return(
        <section>
            {list.map((planet)=>{
                return (
                    <p>{planet.name}</p>
                )
            })}
        </section>
    )
}