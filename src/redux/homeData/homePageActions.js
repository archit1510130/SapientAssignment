import axios from 'axios';
import store from '../store';
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

export const setLaunchYear=(year)=>{
  return {
    type:"SET_LAUNCH_YEAR",
    payload:year,
  }
}


export const fetchDefaultData =(launch_success,land_success,year) => {

    // I did as because end point doest seem in working with axios +params
   launch_success=launch_success?`&amp;launch_success=${launch_success}`:""
   land_success=land_success?`&amp;land_success=${land_success}`:""
   year=year?`&amp;launch_year=${year}`:""

    return (dispatch) => {
      dispatch(getDefaultDataRequest())
      console.log("in Action")
      console.log(launch_success,land_success,year)
     
      axios
        .get('https://api.spacexdata.com/v3/launches?limit=100'+launch_success+land_success+year
          
         )
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



