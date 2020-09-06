import axios from 'axios';
export const getDefaultDataRequest=()=>{
    return {
        type:"GET_DEFAULT_DATA_REQUEST",
    }
}

export const getDefaultDataSuccess=(payload)=>{
    return {
    type:"GET_DEFAULT_DATA_SUCCESS",
    payload:payload,
    }
}

export const getDefaultDataError=(error)=>{
    return {
    type:"GET_DEFAULT_DATA_ERROR",
    payload:error,
    }
}


export const fetchDefaultData = () => {
    return (dispatch) => {
      dispatch(getDefaultDataRequest())
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          // response.data is the users
          const users = response.data
          dispatch(getDefaultDataSuccess(users))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(getDefaultDataError(error.message))
        })
    }
  }



