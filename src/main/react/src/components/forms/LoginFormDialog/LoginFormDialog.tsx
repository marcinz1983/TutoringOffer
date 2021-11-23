import {
  Button,
  Checkbox,
  Dialog,
  FormControlLabel,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import GoogleIcon from "@mui/icons-material/Google";
import { loginFormDialogStyles as styles } from "./login-form-dialog-styles";
import { LOGIN_FORM_CONSTS } from "../../../utility/constants";
import { FormEvent, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { useHistory } from "react-router";
import { ILoginErrorForm, ILoginForm } from "../../../typescript/interfaces";
import { IDialogProps } from "../../../typescript/interfaces";

export const LoginFormDialog = (props: IDialogProps) => {
  const { onClose, open } = props;

  const history = useHistory();

  const auth = getAuth();

  const [errorForm, setErrorForm] = useState<ILoginErrorForm>({
    firebaseErrorCode: "",
    firebaseErrorMessage: "",
    inputEmptyError: false,
    displayError: false,
  });

  const [loginForm, setLoginForm] = useState<ILoginForm>({
    email: "",
    password: "",
  });

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (loginForm.email.length > 0 && loginForm.password.length > 0) {
      signInWithEmailAndPassword(auth, loginForm.email, loginForm.password)
        .then(() => {
          // Signed in
          setLoginForm({ email: "", password: "" });
          setErrorForm({
            firebaseErrorCode: "",
            firebaseErrorMessage: "",
            displayError: false,
            inputEmptyError: false,
          })
          onClose();
          // ...
        })
        .catch((error) => {
          setErrorForm({
            firebaseErrorCode: error.code,
            firebaseErrorMessage: error.message,
            displayError: true,
          });
          console.log(errorForm);
        });
    } else {
      setErrorForm({
        ...errorForm,
        inputEmptyError: true,
        displayError: false,
      });
    }
  };

  const handleRegisterButton = () => {
    onClose();
    history.push("/register");
    setLoginForm({ email: "", password: "" });
  };

  return (
    <Dialog
      onClose={onClose}
      open={open}
      PaperProps={{
        style: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }}
    >
      <Paper component="form" onSubmit={handleFormSubmit} sx={styles.paper}>
        <Grid item xs={12} sx={styles.iconButton}>
          <IconButton aria-label="close-modal" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Grid>

        <Grid container sx={styles.formContainer}>
          <Grid item xs={12} sx={styles.formItem}>
            <Typography variant="h4">
              {LOGIN_FORM_CONSTS.FORM_HEADER}
            </Typography>
          </Grid>
          <Grid item xs={9} sx={styles.formItem}>
            <TextField
              error={errorForm.displayError}
              helperText={
                errorForm.inputEmptyError
                  ? LOGIN_FORM_CONSTS.EMPTY_INPUT_ERROR
                  : null
              }
              label={LOGIN_FORM_CONSTS.LOGIN_INPUT_LABEL}
              fullWidth
              onChange={(e) =>
                setLoginForm({ ...loginForm, email: e.target.value })
              }
            ></TextField>
          </Grid>
          <Grid item xs={9} sx={styles.formItem}>
            <TextField
              error={errorForm.displayError}
              helperText={
                errorForm.displayError
                  ? LOGIN_FORM_CONSTS.LOGIN_ERROR_MESSAGE
                  : null
              }
              label={LOGIN_FORM_CONSTS.PASSWORD_INPUT_LABEL}
              fullWidth
              type="password"
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
            ></TextField>
          </Grid>
          <Grid item xs={9} sx={styles.formItemOptions}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={LOGIN_FORM_CONSTS.REMEMBER_ME_CHECKBOX_LABEL}
            />
            <span>
              <Link to="#">{LOGIN_FORM_CONSTS.RECOVER_PASSWORD}</Link>
            </span>
          </Grid>
          <Grid item xs={9}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={styles.loginButton}
            >
              {LOGIN_FORM_CONSTS.LOGIN_BUTTON}
            </Button>
          </Grid>
          <Grid item xs={9} sx={styles.formItem}>
            <IconButton>
              <FacebookTwoToneIcon fontSize="large" />
            </IconButton>
            <IconButton>
              <GoogleIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item sx={styles.formItemRegister}>
            <Typography variant="h6">
              {LOGIN_FORM_CONSTS.FORM_BOTTOM_TEXT}
            </Typography>
            <Button color="secondary" onClick={handleRegisterButton}>
              {LOGIN_FORM_CONSTS.FORM_REGISTER_LINK}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Dialog>
  );
};
