import ReadLocalSubject from './ReadLocalSubject';
import FileBrowserSupportObserver from './Observers/FileBrowserSupportObserver';
import ReadObserver from './Observers/ReadObserver';
import ValidateImageSelected from './Observers/ValidateImageSelected';
import {AlertDisplay} from '../../ModuleList';

export default class ReadLocalFilesAbstraction{
    static Read(evt,type,tempStorageLocation,CallBack)
    {
        //use the observer pattern


        if(evt.target.files===null||evt.target.files==undefined)
        {
            AlertDisplay.show("Your browser is out of date and doesn't have the required functionality. Please use a more up to date browser.");
            return;
        }


        if(evt.target.files.length==1)//one file selected
        {
            var Subject=new ReadLocalSubject();
            Subject.Subscribe(new FileBrowserSupportObserver());
            if(type==='image')
            {
                Subject.Subscribe(new ValidateImageSelected(evt));
            }

            Subject.Subscribe(new ReadObserver(evt,tempStorageLocation,CallBack));

            try
            {
                Subject.Notify();
            }
            catch(error)
            {
                AlertDisplay.show(error);
                return;
            }
        }
    }
}