import {combineReducers} from 'redux';
import {CaptureFormReducer} from './CaptureFormReducer';
import {FormSubmissionResultReducer} from './FormSubmissionResultReducer';

export let AllReducers=combineReducers({
    CaptureFormReducer:CaptureFormReducer,
    FormSubmissionResultReducer:FormSubmissionResultReducer
});