var $=require('jquery');
export let SubmitCreateIdeaForm=(CurrentReactProps)=>{
        return {
            type:"SUBMIT_CREATE_IDEA_FORM",
            payload:{
                items:{
                    email:CurrentReactProps.email,
                    title:CurrentReactProps.title,
                    category:CurrentReactProps.category,
                    description:CurrentReactProps.description,
                    privacy:CurrentReactProps.privacy,
                    TermsAndConditions:CurrentReactProps.TermsAndConditions,
                    base64:CurrentReactProps.base64
                }
            }
        }
};