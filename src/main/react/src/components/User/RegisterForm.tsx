import {Box, Button, TextField, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {FormEvent, useState} from "react";
import {IErrorsForm, IRegisterForm} from "../../typescript/interfaces";
import {FormRegisterStyles as styles} from "./registerform-styles";
import {
  FORM_BUTTON_BACK,
  FORM_BUTTON_REGISTER,
  FORM_EMAIL_ERROR,
  FORM_INPUT_EMAIL,
  FORM_INPUT_NAME,
  FORM_INPUT_PASSWORD,
  FORM_INPUT_REPASSWORD,
  FORM_INPUT_SURNAME,
  FORM_PASSWORD_ERROR,
  FORM_REPASSWORD_ERROR,
  FORM_TITLE_REGISTER
} from "../../utility/constants";
import {RegistrationService} from "../../services/registration.service";
import {IRegisterUserRequest} from "../../typescript/registration.model";

export const RegisterForm = () => {

  const [formErrors, setFormErrors] = useState<IErrorsForm>({
    email: '',
    password: '',
    repassword: '',
    valid: false,
  });

  const [registerForm, setRegisterForm] = useState<IRegisterForm>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repassword: '',
  });

  //State
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    RegistrationService.registerUserToFirebase({email: registerForm.email, password: registerForm.password})
      .then(user => {
        console.log(user);
        const data: IRegisterUserRequest = {
          firebaseUid: user.uid,
          firebaseEmail: registerForm.email,
          firebaseEmailVerified: user.emailVerified,
          firebaseIssuer: "",
          firebaseName: user.displayName || `${registerForm.firstName} ${registerForm.lastName}`,
          firebasePicture: user.photoURL || ""
        }
        RegistrationService.registerUser(data)
          .then(value => console.log(data))
      }).catch(error => {
      //console.log(error.propName);
      const key = error.propName;
      console.log(error.message);
      setFormErrors({...formErrors, email: '', [key]: error.message});
    })
  }


  const isFormValid = !formErrors.email
    && !formErrors.password
    && !formErrors.repassword
    && registerForm.email
    && registerForm.password
    && registerForm.repassword
    && registerForm.password === registerForm.repassword;


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    setRegisterForm({...registerForm, [key]: event.target.value});
  }

  const handleEmailBlur = (event: any) => {
    const {target: {value}} = event;
    const emailReg = new RegExp(/.+@.+\..+/);
    if (!emailReg.test(value)) {
      setFormErrors({...formErrors, email: FORM_EMAIL_ERROR});
    } else {
      setFormErrors({...formErrors, email: ''});
    }
  }

  const handlePasswordBlur = (event: any) => {
    const {target: {value}} = event;
    const passwordReg = new RegExp("^(?=.*[a-z])(?=.{6,})");
    if (!passwordReg.test(value)) {
      setFormErrors({...formErrors, password: FORM_PASSWORD_ERROR});
    } else {
      setFormErrors({...formErrors, password: ''});
    }
  }

  const handleRepasswordBlur = (event: any) => {
    const {target: {value}} = event;

    if (registerForm.password !== value) {
      setFormErrors({...formErrors, repassword: FORM_REPASSWORD_ERROR});
    } else {
      setFormErrors({...formErrors, repassword: ''});
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
          id="email"
          name="email"
          label={FORM_INPUT_EMAIL}
          variant="filled"
          value={registerForm.email}
          //onChange= {e => setRegisterForm({...registerForm, email: e.target.value})}
          onChange={handleChange}
          onBlur={handleEmailBlur}
          error={Boolean(formErrors.email)}
          helperText={formErrors.email}
          required
        />
        <TextField
          margin="normal"
          id="password"
          name="password"
          label={FORM_INPUT_PASSWORD}
          type="password"
          variant="filled"
          inputProps={{minLength: 5}}
          value={registerForm.password}
          onChange={handleChange}
          onBlur={handlePasswordBlur}
          error={Boolean(formErrors.password)}
          helperText={formErrors.password}
          required
        />
        <TextField
          margin="normal"
          id="repassword"
          name="repassword"
          label={FORM_INPUT_REPASSWORD}
          type="password"
          variant="filled"
          value={registerForm.repassword}
          onChange={handleChange}
          onBlur={handleRepasswordBlur}
          error={Boolean(formErrors.repassword)}
          helperText={formErrors.repassword}
          required
        />
        <Button disabled={!isFormValid} variant="contained" type="submit"> {FORM_BUTTON_REGISTER} </Button>
        <Link to="/">
          <Button variant="outlined" fullWidth startIcon={<ArrowBackIosIcon/>}>
            {FORM_BUTTON_BACK}
          </Button>
        </Link>
      </form>
    </Box>
  )
}
