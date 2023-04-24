import React from "react";
import { Route } from "react-router-dom";
import { Box } from "@mui/material";

const FullPageLayout = ({ render, ...rest }) => {
    
    return (
        <Box sx={{backgroundColor:"Yellow"}}> 
            <Route {...rest} render={matchProps => (<div> {render(matchProps)}</div>)} />
        </Box>
    );
};

export default FullPageLayout;