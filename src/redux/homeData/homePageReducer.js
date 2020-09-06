const initialState = {
    loading: false,
    data: [],
    error: '',
    launchYear:'',
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_DEFAULT_DATA_REQUEST":
        return {
          ...state,
          loading: true,
          data:[]
        }
      case "GET_DEFAULT_DATA_SUCCESS":
        return {
          loading: false,
          data: action.payload,
          error: ''
        }
      case "GET_DEFAULT_DATA_ERROR":
        return {
          loading: false,
          data: [],
          error: action.payload
        }

        case "SET_LAUNCH_YEAR":
          return {
            launchYear: action.payload
          }
      default: return state
    }
  }
  
  export default reducer