import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { reducer as TodoReducer } from '../modules/Todo';
import { reducer as AuthReducer } from '../modules/auth';
import { reducer as DashboardReducer} from '../modules/Dashboard';


const appReducer = combineReducers({
    form: formReducer,
    todo: TodoReducer,
    auth: AuthReducer,
    dashboard: DashboardReducer,
});

export default appReducer;