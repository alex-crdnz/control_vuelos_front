import React, { Fragment } from 'react'
import { Route } from "react-router-dom";
import { Box, Grid } from '@mui/material';
import NavBarUser from '../components/NavBar/NavBarUser';

const UserPageLayout = ({ render, ...rest }) => {
  return (
    <Fragment>

      <Grid>
        <NavBarUser {...rest} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <Route {...rest} render={matchProps => (<div> {render(matchProps)}</div>)} />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default UserPageLayout;