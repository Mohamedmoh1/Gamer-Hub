
import axios from 'axios'
import { CURRENT, FAIL, GETALLUSERS, GETONEUSER, LOGIN, LOGOUT, REGISTER } from '../ActionsTypes/AuthTypes'
import { handleError } from './ErrorActions'

export const register=(newUser,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/auth/SignUp',newUser)

        dispatch(
            {
                type : REGISTER,
                payload : res.data
            }
        )

        navigate('/Profil')
    } catch (error) {
        // dispatch(
        //     {
        //         type : FAIL,
        //         payload : error.response.data.errors
        //     }
        // )

        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}



export const login=(cordUser,navigate)=>async(dispatch)=>{
    try {
        const res =  await axios.post('/api/auth/SignIn',cordUser)

        dispatch(
            {
                type : LOGIN,
                payload : res.data
            }
        )

        navigate('/Profil')
    } catch (error) {
        // dispatch(
        //     {
        //         type : FAIL,
        //         payload : error.response.data.errors
        //     }
        // )

        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}


export const logout=()=>{
    return(
        {
            type : LOGOUT
        }
    )
}

export const current=()=>async(dispatch)=>{

    const config = {
        headers : {
            Authorazaition : localStorage.getItem('token')
        }
    }
    try {
        const res =  await axios.get('/api/auth/ConnectedUser',config)

        dispatch(
            {
                type : CURRENT,
                payload : res.data
            }
        )
    } catch (error) {
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            }
        )
    }
}

export const updateProfil=(upUser,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/auth//updateUser`,upUser,{
            headers : {
                Authorazaition : localStorage.getItem('token')
            }
        })

        dispatch(current())

        navigate('/Profil')
    } catch (error) {
        console.log(error)
    }
}


export const deleteUser=(id,navigate,location)=>async(dispatch)=>{
    try {
        if(location.pathname == '/Profil'){
            dispatch(logout())

        navigate('/')

        await axios.delete(`/api/auth/deleteUser/${id}`)
        }else{
            await axios.delete(`/api/auth/deleteUser/${id}`)
            dispatch(getAllUsers())
        }
        
       
    } catch (error) {
        console.log(error)
    }
}



export const getAllUsers=()=>async(dispatch)=>{
    try {
        const res = await axios.get('/api/auth/getallUsers')

        dispatch(
            {
                type : GETALLUSERS,
                payload : res.data.users
            }
        )
    
    } catch (error) {
    
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}

export const getOneuser=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/auth/getOneuser/${id}`)

        dispatch(
            {
                type : GETONEUSER,
                payload : res.data.user
            }
        )
    
    } catch (error) {
    
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}
