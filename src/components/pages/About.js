import React from 'react';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {Link} from "react-router-dom";
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import Button from "@mui/material/Button";

const linkStyle = {
    textDecoration: "none",
    display: 'block',
    color: "#fff"
};

function About () {
    return (
        <Container>
            <Typography
                variant="box1"
                component="p"
                sx={{paddingTop: 8}}
            >
                This page is about displaying users and editing them
            </Typography>
            <Button variant="contained" endIcon={<InsertLinkIcon />} sx={{marginTop : 2}}>
                <Link style={linkStyle} to='/'> back to home</Link>
            </Button>

        </Container>
    );
};

export default About;