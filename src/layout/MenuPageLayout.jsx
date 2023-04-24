import React, { Fragment } from 'react'
import { Route } from "react-router-dom";
import { Box, Grid } from '@mui/material';
import NavBar from '../components/NavBar/NavBar';

const MenuPageLayout = ({ render, ...rest }) => {
  return (
    <Fragment>

      <Grid>
        <NavBar {...rest} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <Route {...rest} render={matchProps => (<div> {render(matchProps)}</div>)} />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default MenuPageLayout;
