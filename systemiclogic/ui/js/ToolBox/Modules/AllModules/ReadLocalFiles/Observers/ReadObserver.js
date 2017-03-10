import {AjaxLoadingDisplay} from '../../../ModuleList';

export default class ReadObserver{

    constructor(evt,tempStorageLocation,CallBack)
    {
        this.evt=evt;
        this.tempStorageLocation=tempStorageLocation;
        this.CallBack=CallBack;
    }

    Run()
    {


        let files = this.evt.target.files;
        let reader = new FileReader();

        reader.onloadstart=function(){
            AjaxLoadingDisplay.show('Reading file...');
        };

        reader.onerror=function()
        {
            throw 'An unexpected error was encountered. Please try again.';
        };

        reader.onloadend=(evt)=>
        {
            window.sessionStorage.setItem(this.tempStorageLocation,evt.target.result);
            AjaxLoadingDisplay.hide();
            this.CallBack();
        };

        reader.readAsDataURL(files[0]);
    }
}