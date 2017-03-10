import {AjaxLoadingDisplay} from '../ModuleList';
const $ = require('jquery');


export default class AjaxSenderModule{
    static send(url,httpData,httpMethod,loadingMessage=null)
    {
        return new Promise((resolve,reject)=>{

            if(loadingMessage!==null)
            {
                AjaxLoadingDisplay.show(loadingMessage);
            }


            $.ajax({
                url:url,
                data:httpData,
                cache:false,
                method:httpMethod,
                dataType:'json',
                success:function(result)
                {
                    if(loadingMessage!==null)
                    {
                        AjaxLoadingDisplay.hide();
                    }

                    resolve(result);
                },
                error:function(jqXHR,textStatus,errorThrown)
                {
                    if(loadingMessage!==null)
                    {
                        AjaxLoadingDisplay.hide();
                    }

                    reject({
                        jqXHR:jqXHR,
                        textStatus:textStatus,
                        errorThrown:errorThrown
                    });
                }
            });
        });
    }
}