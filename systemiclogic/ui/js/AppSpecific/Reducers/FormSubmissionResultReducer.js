import {
    FullFormValidation,AlertDisplay,AjaxSender
} from '../../ToolBox/Modules/ModuleList';
import {APIurl} from '../../ToolBox/Config';
const $=require('jquery');

export let FormSubmissionResultReducer = function (state = "", action) {
    let APIresult="";
    let APIresultAsString="";
    if (state !== "") {
        if (action.type === "SUBMIT_CREATE_IDEA_FORM") {


            FullFormValidation.runValidator([
                    {
                        fieldType: 'email',
                        fieldValue: action.payload.items.email,
                        errorMessage: 'Please enter a valid e-mail address'
                    },
                    {
                        fieldType: 'text',
                        fieldValue: action.payload.items.title,
                        errorMessage: 'The title field is required'
                    },
                    {
                        fieldType: 'text',
                        fieldValue: action.payload.items.category,
                        errorMessage: 'The category is required'
                    },
                    {
                        fieldType: 'text',
                        fieldValue: action.payload.items.description,
                        errorMessage: 'The description field is required'
                    },
                    {
                        fieldType: 'text',
                        fieldValue: action.payload.items.TermsAndConditions[0],
                        errorMessage: 'Please accept our terms and conditions'
                    }
                ],
                {
                    Fail: (errorMessage)=> {
                        AlertDisplay.show(errorMessage);
                    },
                    Pass: async ()=> {

                        //submit to server - promise based

                        try{
                            APIresult=await AjaxSender.send(APIurl,action.payload.items,'POST','Please wait while we save your data.');
                            APIresultAsString=JSON.stringify(APIresult);
                            $('#FormAncestor').hide();
                            $('#APIresultAncestor').html(`
                                <br><br>
                                <div class="alert alert-success">
                                   Your data has been saved
                                </div>
                                
                                <div>
                                    ${APIresultAsString}
                                </div>
                            `).show();
                        }
                        catch(error)
                        {
                            APIresult={
                                "status":false,
                                "payload":"An unexpected error was encountered."
                            };

                            AlertDisplay.show('An unexpected error was encountered.');
                        }
                    }
                });


            return {
                FormSubmissionResult: {
                    status: APIresult
                }
            }
        }
        else {
            return Object.assign({}, state);
        }
    }
    else {
        return {
            FormSubmissionResult: {
                status: ''
            }
        }
    }
};