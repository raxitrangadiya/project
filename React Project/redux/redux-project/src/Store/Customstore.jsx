import{legacy_createstore as createstore,applyMiddlewear} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './Reducer/index.js'
let initialState = {}
let store = createstore(
    rootReducer,
    initialState,     
    composeWithDevTools(applyMiddlewear(...middlewear))
)