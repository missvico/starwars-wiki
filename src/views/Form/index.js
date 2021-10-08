import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import FormComponent from './FormComponent';

export default () => {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        email: "",
        message: ""
    });

    const handleChange = (event) =>{
        const property = event.target.name
        const value = event.target.value
        setFormData({...formData, [property]: value})
    }

    const handleChangeName = (event) => {
       const name = event.target.value
       setFormData({...formData, name})
    }  
    
    const handleChangeEmail = (event) => {
        const email = event.target.value
        setFormData({...formData, email})
     } 

     const handleChangePassword = (event) => {
        const password = event.target.value
        setFormData({...formData, password})
     } 

     const handleChangeMessage = (event) => {
        const message = event.target.value
        setFormData({...formData, message})
     } 

    const handleSubmit = ()=>{
       const sendData = async () => {
           try{
            const response = await axios({
                url:  `https://jsonplaceholder.typicode.com/posts`,
                method: 'POST'
            })
            console.log(response)
           }catch(err){
            console.log(err)
           }
       }
        sendData()
        setFormData({
            name: "",
            password: "",
            email: "",
            message: ""
        })
    }

    return(
        <FormComponent 
            onChangeName={handleChangeName} 
            onChangeEmail={handleChangeEmail} 
            onChangePassword={handleChangePassword} 
            onChangeMessage={handleChangeMessage}
            onClick={handleSubmit}
        />
    )
}