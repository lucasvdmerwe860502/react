var jQuery = require('jquery');
window.$ = window.jQuery = jQuery;
require('bootstrap');
jQuery.noConflict(true);

export default class AjaxLoadingDisplayModule{

    static show(message)
    {

        if(jQuery('#ajaxLoadingDisplay').length===0)
        {
            jQuery('body').append(`
                <div id="ajaxLoadingDisplay" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="LoadingModalLabel">
                  <div class="modal-dialog modal-sm" role="document">
                    <div class="modal-content" style="padding:15px">
                        <table>
                            <tbody>
                                <tr>
                                    <td style="40px;">
                                        <img src="styles/ToolBox/img/rolling.svg"/>
                                    </td>
                                    <td style="padding-left:10px">
                                       <div id="LoadingMessage"></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                  </div>
                </div>

            `);
        }

        jQuery('#LoadingMessage').html(message);


        jQuery('#ajaxLoadingDisplay').modal({
            backdrop:'static',
            show:true,
            keyboard:false
        });
    }

    static hide()
    {
        jQuery('#ajaxLoadingDisplay').modal('hide');
    }
}

