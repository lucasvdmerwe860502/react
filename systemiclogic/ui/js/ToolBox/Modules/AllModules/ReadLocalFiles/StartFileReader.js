import {File} from '../../../Modules/ModuleList';

export default class StartFileReader{
    constructor(event)
    {
        this.event=event;
    }

    Read(CallBack){
        File.Read(this.event,'image','IdeaBase64',CallBack);
    }
}