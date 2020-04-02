import { combineReducers } from 'redux'
import calculator from './calculator'
import functionBox from './functionBox'
import parametricFunction from './parametricFunction'
import settings from './settings'
import ui from './ui'

const rootReducer = combineReducers({
  calculator,
  functionBox,
  parametricFunction,
  settings,
  ui,
})

export default rootReducer
