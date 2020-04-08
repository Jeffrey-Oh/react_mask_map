import { combineReducers } from 'redux';
import maskMapModule from './MaskMap';
import searchMapModule from './SearchMap';

export default combineReducers({
    maskMapModule,
    searchMapModule
});