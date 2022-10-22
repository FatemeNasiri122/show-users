import React, {useContext} from 'react';
import UsersContext from "../context/UsersContext";
import Item from '../item/Item'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function Home() {
    const {users , error} = useContext(UsersContext)
    if (error){
        return <Container sx={{paddingTop: 10}}>
            <h1>Error in loading data</h1>
        </Container>
    }else return (
        <Container>
            <Grid container spacing={2} marginTop={2}>
            {users.map((user) =>(
                    <Item key={user.id} user={user}/>
                ))}
            </Grid>
        </Container>
    );

};

export default Home;