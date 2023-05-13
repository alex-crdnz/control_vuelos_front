import React, { useState, useEffect, Fragment } from 'react';

import Dialogo from '../../Dialogo/Dialogo';
import toastr from "toastr"
import FormLogin from '../FormLogin';
import Registrar from './Registrar';
import Alert from '@mui/material/Alert';

import UserService from '../../../services/UserService';
import { margin } from '@mui/system';


const REGISTRAR = "Registrar";
const LOGIN = "Login"
const Login = (props) => {
  const [credentials, setCredentials] = useState({
    user: "",
    password: "",
    password2: "",
    email: ""
  });
  const [view, setView] = useState(LOGIN)

  const [showPrimaryButton, setshowPrimaryButton] = useState(LOGIN)

  const [showSecundaryButton, setshowSecundaryButton] = useState(true)

  const [disableBottonPrimary, setDisableButtonPrimary] = useState(true)

  const [msgError, setMsgError] = useState("")


  const onChangeCredentials = (e) => {
    const { name, value } = e.target;
    let newValue = value.trim().replace("__", "_");
    setCredentials({ ...credentials, [name]: newValue })
  };

  const validar = () => {
    UserService.login(credentials)
      .then((resp) => {
        if (resp.data["message"]==="Credenciales correctas") {
          toastr.success(resp.data["message"])
          localStorage.setItem("user", JSON.stringify(credentials.user));
          localStorage.setItem("password", JSON.stringify(credentials.password));
          props.history.push("/vuelos")
        } else {
          toastr.error(resp.data)
        }
      })
      .catch((error) => {
        toastr.error(error)
      })
  }

  const registrar = () => {
    if (view === REGISTRAR) {
      UserService.postUsers(credentials)
        .then((response) => {
          console.log("Usuario Registrado");
        })
        .catch((error) => {
          console.error(error);
        })
    } else {
      setView(REGISTRAR);
      setshowPrimaryButton(false);
    }
  }

  const showViewLogin = (e) => {
    setView(LOGIN);
    setshowPrimaryButton(true);
  }
  const getBody = () => {
    return (
      view === LOGIN
        ? <Fragment>
          <FormLogin credentials={credentials} setCredentials={onChangeCredentials}
          />
          {disableBottonPrimary && msgError.length > 0 && <Alert sx={{ marginTop: "5px" }} severity="error">{msgError}</Alert>}
        </Fragment>
        : <Registrar credentials={credentials} setCredentials={onChangeCredentials} showViewLogin={showViewLogin}
        />
    )

  }

  const showError = (valid, msg) => {
    setDisableButtonPrimary(valid);
    setMsgError(msg);
  }

  useEffect(() => {
    let valid = false;
    let msg = "";

    if (credentials.user.length !== 0) {
      valid = credentials.user.length >= 4;
      msg = valid ? "" : "El usuario tiene que ser mayor a 3 caracteres";
      showError(!valid, msg);
    }

  }, [credentials.user]);

  useEffect(() => {
    let valid = false;
    let msg = "";

    if (credentials.password.length !== 0) {
        valid = credentials.password.length >= 6;
        msg = valid ? "" : "Password tiene que ser mayor 5 caracteres";
        showError(!valid, msg);
    }

  }, [credentials.password]);

  return (
    <Dialogo
      open={true}
      primaryFuntion={validar}
      secundaryFuntion={registrar}
      textSecundary={REGISTRAR}
      textPrimary={LOGIN}
      showPrimary={showPrimaryButton}
      showSecundary={showSecundaryButton}
      body={getBody()}
      titulo={view === LOGIN ? "BIENVENIDO" : "Registro de nuevo usuario"}
      disableBottonPrimary={disableBottonPrimary}
    />
  );

}
export default Login;
