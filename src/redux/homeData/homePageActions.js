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
        .get('https://api.spacexdata.com/v3/launches?limit=100')
        .then(response => {
          let data = response.data
          data=data.map(obj=>{

           const {flight_number,mission_id,launch_success,mission_name,links,launch_year,
           }=obj
            let robj={flight_number,mission_id,launch_success,mission_name,links,launch_year}
            return robj;
        })

        const result = new Array(Math.ceil(data.length / 3))
  .fill()
  .map(_ => data.splice(0, 3))



         
          
          dispatch(getDefaultDataSuccess(result))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(getDefaultDataError(error.message))
        })
    }
  }



