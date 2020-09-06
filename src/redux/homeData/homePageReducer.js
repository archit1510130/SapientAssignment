const initialState = {
    loading: false,
    data: [],
    error: '',
    launchYear:'',
    launchSuccess:'',
    landSuccess:'',
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
          ...state,
          loading: false,
          data: action.payload,
          error: ''
        }
      case "GET_DEFAULT_DATA_ERROR":
        return {
          ...state,
          loading: false,
          data: [],
          error: action.payload
        }

        case "SET_LAUNCH_YEAR":
          return {
            ...state,
            launchYear: action.payload
          }

          case "SET_LAUNCH_SUCCESS":
            return {
              ...state,
              launchSuccess: action.payload
            }

            case "SET_LAND_SUCCESS":
              return {
                ...state,
                landSuccess: action.payload
              }

              case "RESET_FILTER_DATA":
                return {
                  ...state,
                  landSuccess:'',
                  launchYear:'',
                  launchSuccess:'',
                }


      default: return state
    }
  }
  
  export default reducer