import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
//import { loginReducer } from '../../Redux/reducer_ownersLognin';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
 // loginReducer
});
/*const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);*/

const store = createStore(reducer, {}, applyMiddleware(thunk, logger));
export default store;
