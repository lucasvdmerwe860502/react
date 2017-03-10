const $=require('jquery');

export let CaptureFormReducer=function(state="",action)
{
    let ClonedState;

    if(state!=="")
    {
        if(
            action.type==="EMAIL_VALUE_CHANGED"||
            action.type=="TITLE_VALUE_CHANGED"||
            action.type=="CATEGORY_VALUE_CHANGED"||
            action.type=="DESCRIPTION_VALUE_CHANGED"||
            action.type=="PRIVACY_VALUE_CHANGED"||
            action.type=="BASE64_VALUE_CHANGED"||
            action.type=="TERMS_CHECKED_CHANGED"
        )
        {
            //update state
            let property=action.payload.item.property;
            let value=action.payload.item.value;
            ClonedState = $.extend({},state);
            ClonedState[property]=value;//replace property
            return ClonedState;
        }
        else
        {
            return Object.assign({},state);
        }
    }
    else
    {
        //set state
        return {
            'email':'',
            'title':'',
            'category':'',
            'description':'',
            'privacy':'',
            'TermsAndConditions':[],
            'base64':''
        }
    }
};