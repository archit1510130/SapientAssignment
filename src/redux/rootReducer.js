import { combineReducers } from 'redux'
import homePageReducer from './homeData/homePageReducer';


const rootReducer = combineReducers({
  home:homePageReducer
})

export default rootReducer