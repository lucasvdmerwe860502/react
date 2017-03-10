export default class FileBrowserSupportObserver{

    constructor()
    {

    }

    Run()
    {
        if (window.File && window.FileReader && window.FileList && window.Blob) {

        } else {
            throw 'Please use a newer browser to utilize the file upload functionality.';
        }
    }
}