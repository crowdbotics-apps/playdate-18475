import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn272310Reducer from '../features/SignIn272310/redux/reducers'
import SignIn272257Reducer from '../features/SignIn272257/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn272310: SignIn272310Reducer,
SignIn272257: SignIn272257Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});