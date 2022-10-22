import {createContext, useEffect, useReducer} from "react";
import axios from "axios";
import usersReducer from "./usersReducer";

const UsersContext = createContext()

export const UsersProvider = ({children}) =>{
    const initialState = {
        users: [],
        error: false,
    }

    const [state,dispatch] = useReducer(usersReducer,initialState)

    const getUsers = async () =>{
        try {
            const response = await axios.get('https://62e90a2a01787ec7120fbb8b.mockapi.io/users');
            const data = response.data;
            dispatch({
                type: 'GET_USERS',
                payload: data
            })
        } catch (e) {
            dispatch({
                type: 'ERROR',
                payload: true
            })
        }

    }
    const updateUsers = async (userid , user) =>{
        try {
            const response = await axios.put(`https://62e90a2a01787ec7120fbb8b.mockapi.io/users/${userid}` , user);
            const newResponse = await axios.get('https://62e90a2a01787ec7120fbb8b.mockapi.io/users');
            const data = newResponse.data;
            dispatch({
                type: 'UPDATE_USERS',
                payload: data
            })
        } catch (e) {
            dispatch({
                type: 'ERROR',
                payload: true
            })
        }

    }
    useEffect(() =>{
        getUsers()
        dispatch({
            type: 'CHANGE_LOADING',
            payload: false
        })
    },[])
    return(
        <UsersContext.Provider value={{users : state.users ,error : state.error, updateUsers}}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersContext