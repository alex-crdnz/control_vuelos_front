import React, { Fragment } from "react";
import FormLogin from "../FormLogin";
import FormRegistrar from "../FormRegistrar";

const Registrar = (props) => {
    return (
        <Fragment>
            <FormLogin
                {...props} />
            <FormRegistrar
                {...props}/>
            <h4>Registrarse ....</h4>
        </Fragment>
    );
}

export default Registrar;