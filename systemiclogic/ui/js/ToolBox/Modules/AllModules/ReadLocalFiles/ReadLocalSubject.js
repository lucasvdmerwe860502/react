var $=require('jquery');

export default class ReadLocalSubject{
    constructor()
    {
        this.ObserverList=[];
    }

    Subscribe(Observer)
    {
        this.ObserverList.push(Observer);
    }

    Notify()
    {
        $(this.ObserverList).each(function(index,element)
        {
            element.Run();
        });
    }
}