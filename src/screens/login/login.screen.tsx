import {Grid} from "@mui/material";
import * as yup from 'yup';
import {Wrapper} from "./login.styled";
import Input from "../../components/input/input";
import Button from "../../components/button/button"
import FormError from "../../components/form-error/form-error"
import { useCallback, useState} from "react";

export default function Form() {
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState('')

    const handleChange = useCallback(
        ({ target } : any) => {
            setData(prevData => ({
                ...prevData,
                [target.name]: target.value
            }))
        },
        [setData]
    )

    const handleSend = useCallback(   
        async () => {     
            try {
                const schema = yup.object().shape({
                    email: yup.string().required().email(),
                    password: yup.string().required()
                })
                               
                await schema.validate(data)
                setError('')
            } catch (error: any) {
                
                setError(error.errors[0])
                console.log(error.errors[0])
            }            
      }, [data]
    )

    return(
        <Wrapper container alignContent='center' justifyContent='center'>
            <Grid item xs={2} alignContent='center' justifyContent='center'>
                <Input 
                    type='email' 
                    name='email' 
                    placeholder="E-mail"
                    onChange={handleChange} 
                />
                <Input 
                    type='password'
                    name='password'
                    placeholder='Senha'
                    onChange={handleChange} 
                />
                <FormError message={error} />  
                <Button onClick={handleSend}>Entrar</Button>                              
            </Grid>
        </Wrapper>
    )
}