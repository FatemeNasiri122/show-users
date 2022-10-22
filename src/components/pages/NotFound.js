import React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import {Link} from "react-router-dom";

const linkStyle = {
    textDecoration: "none",
    display: 'block',
    color: "#fff"
};

function NotFound () {
    return (
        <Container sx={{paddingTop: 10}}>
            <Typography
                variant="box1"
                component="p"
            >
                page not found
            </Typography>
            <Button variant="contained" endIcon={<InsertLinkIcon />} sx={{marginTop : 2}}>
                <Link style={linkStyle} to='/'> back to home</Link>
            </Button>
        </Container>
    );
};

export default NotFound;