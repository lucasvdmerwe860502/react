var jQuery = require('jquery');
window.$ = window.jQuery = jQuery;
require('bootstrap');
jQuery.noConflict(true);

export default class AlertDisplayModule{
    static show(message)
    {
        if(jQuery('#AlertDisplay').length===0)
        {
            jQuery('body').append(`
                <div id="AlertDisplay" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="AlertModalLabel">
                  <div class="modal-dialog modal-sm" role="document">
                    <div class="modal-content" style="padding:15px">
                       <div id="WarningMessage"></div>
                    </div>
                  </div>
                </div>
            `);
        }

        jQuery('#WarningMessage').html(message);

        jQuery('#AlertDisplay').modal('show');
    }
}