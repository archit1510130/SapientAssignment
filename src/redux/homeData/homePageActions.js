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

export const setLaunchYear=(year,yearActive)=>{
  return {
    type:"SET_LAUNCH_YEAR",
    payload:year,
    yearActive:yearActive
  }
}

export const setLaunchSuccess=(launch_success,launchActive)=>{
  return {
    type:"SET_LAUNCH_SUCCESS",
    payload:launch_success,
    successActive:launchActive
  }
}
export const setLandSuccess=(land_success,landActive)=>{
  return {
    type:"SET_LAND_SUCCESS",
    payload:land_success,
    landActive:landActive
  }
}

export const resetAfterFiler=()=>{
  return{
    type:"RESET_FILTER_DATA"
  }
}


export const fetchDefaultData =(launch_success,land_success,year) => {

    // I did as because end point doest seem in working with axios +params

   let param={limit:100}

   if(launch_success)
      param['launch_success']=launch_success

    if(land_success)
      param['land_success']=land_success

      if(year)
      param['launch_year']=year

    

    return (dispatch) => {
      dispatch(getDefaultDataRequest())
     
     
      axios
        .get('https://api.spacexdata.com/v3/launches',{
          params:param
        }
          
         )
        .then(response => { 
          let data = response.data
          data=data.map(obj=>{

           const {flight_number,mission_id,launch_success,mission_name,links,launch_year,
           }=obj
            let robj={flight_number,mission_id,launch_success,mission_name,links,launch_year}
            return robj;
        })
        
        let result = new Array(Math.ceil(data.length / 4))
  .fill()
  .map(_ => data.splice(0, 4))

         dispatch(resetAfterFiler());
          dispatch(getDefaultDataSuccess(result))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(getDefaultDataError(error.message))
        })
    }
  }



