import {useSelector} from 'react-redux'
import Alert from 'react-bootstrap/Alert';

const ErrorAuth=()=>{
    const errorStore = useSelector(state => state.ErrorReducer)
    return(
        <div>
            {
                errorStore.map((el,i,t)=> 
                <Alert key='danger' variant='danger'>
                 {el.msg}
              </Alert>)
            }
        </div>
    )
}

export default ErrorAuth