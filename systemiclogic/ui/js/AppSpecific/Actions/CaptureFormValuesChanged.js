var $ = require('jquery');
export let CaptureFormValuesChanged = (property, value, actionType)=> {
    return {
        type: actionType,
        payload: {
            item: {
                property: property,
                value: value
            }
        }
    }
};