import { Button,Typography, TextField, Box} from '@mui/material';
import {Link} from 'react-router-dom';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {useState, FormEvent} from "react";
import {IRegisterForm} from "../../typescript/interfaces";
import {IErrorsForm}  from "../../typescript/interfaces";
import { FormRegisterStyles as styles } from "./registerform-styles";
import {FORM_EMAIL_ERROR,FORM_REPASSWORD_ERROR,FORM_PASSWORD_ERROR,FORM_BUTTON_REGISTER,FORM_BUTTON_BACK,FORM_TITLE_REGISTER,FORM_INPUT_EMAIL,FORM_INPUT_REPASSWORD,FORM_INPUT_PASSWORD,FORM_INPUT_USERNAME,FORM_INPUT_NAME,FORM_INPUT_SURNAME } from "../../utility/constants";
//import axios from 'axios';

export const RegisterForm = () =>{

    //State
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(RegisterForm)
    }

    const [errorsForm , setErrorsForm] = useState<IErrorsForm>({
        email:'',
        password:'',
        repassword:'',
        valid:false,
    });

    const [registerForm , setRegisterForm] = useState<IRegisterForm>({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        repassword: '',
    });

    //Check Email with regex when error set error
    const handleEmailBlur = (event: any) =>{
        const {target: {value}} = event;
        //setRegisterForm({...registerForm, email: value});
        let reg = new RegExp(/.+@.+\..+/);
        if(!reg.test(value)){
            setErrorsForm({...errorsForm,email:FORM_EMAIL_ERROR,valid:false});
        }else{
            setErrorsForm({...errorsForm,email:'',valid:true});
        }
    }

    //Check password 1 +8 znakow 1 znak specialny 1 duża litera 1 liczba
    const handlePasswordBlur = (event:any) =>{
        const {target: {value}} = event;
        //setRegisterForm({...registerForm, repassword: value});
        let reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})");
        if(!reg.test(value)){
            setErrorsForm({...errorsForm,password:FORM_PASSWORD_ERROR,valid:false});
        }else{
            setErrorsForm({...errorsForm,password:'',valid:true});
        }
    }
    //Check If Password is the same as Repassword
    const handleRepasswordBlur = (event:any) =>{
        const {target: {value}} = event;
        //setRegisterForm({...registerForm, repassword: value});
        if(registerForm.password!==value){
            setErrorsForm({...errorsForm,repassword:FORM_REPASSWORD_ERROR,valid:false});
        }else{
            setErrorsForm({...errorsForm,repassword:'',valid:true});
        }
    }

    return (
        <Box>
            <form
                style={styles.formContainer}
                onSubmit={handleSubmit}
            >
                <Typography variant="h2">{FORM_TITLE_REGISTER}</Typography>
                <TextField
                    margin="normal"
                    id="firstname"
                    label={FORM_INPUT_NAME}
                    variant="filled"
                    value={registerForm.firstName}
                    onChange={e => setRegisterForm({...registerForm, firstName: e.target.value})}/>
                <TextField
                    margin="normal"
                    id="lastname"
                    label={FORM_INPUT_SURNAME}
                    variant="filled"
                    value={registerForm.lastName}
                    onChange={e => setRegisterForm({...registerForm, lastName: e.target.value})}
                />
                <TextField
                    margin="normal"
                    id="username"
                    label={FORM_INPUT_USERNAME}
                    variant="filled"
                    value={registerForm.username}
                    onChange={e => setRegisterForm({...registerForm, username: e.target.value})}
                    required/>
                <TextField
                    margin="normal"
                    id="email"
                    label={FORM_INPUT_EMAIL}
                    variant="filled"
                    value={registerForm.email}
                    onChange= {e => setRegisterForm({...registerForm, email: e.target.value})}
                    onBlur = {handleEmailBlur}
                    error={Boolean(errorsForm.email)}
                    helperText={(errorsForm.email)}
                    required
                />
                <TextField
                    margin="normal"
                    id="password"
                    label={FORM_INPUT_PASSWORD}
                    type="password"
                    variant="filled"
                    inputProps={{ minLength: 5 }}
                    value={registerForm.password}
                    error={Boolean(errorsForm.password)}
                    helperText={(errorsForm.password)}
                    onBlur = {handlePasswordBlur}
                    onChange={e => setRegisterForm({...registerForm, password: e.target.value})}
                    required
                />
                <TextField
                    margin="normal"
                    id="repassword"
                    label={FORM_INPUT_REPASSWORD}
                    type="password"
                    variant="filled"
                    value={registerForm.repassword}
                    onChange={e => setRegisterForm({...registerForm, repassword: e.target.value})}
                    onBlur = {handleRepasswordBlur}
                    error={Boolean(errorsForm.repassword)}
                    helperText={(errorsForm.repassword)}
                    required
                />
                <Button disabled={!errorsForm.valid} variant="contained" type="submit"> {FORM_BUTTON_REGISTER} </Button>
                <Link to="/">
                    <Button variant="outlined" fullWidth startIcon={<ArrowBackIosIcon />}>
                        {FORM_BUTTON_BACK}
                    </Button>
                </Link>
            </form>
        </Box>
    )
}
