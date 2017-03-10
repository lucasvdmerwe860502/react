export default class ValidateImageSelected {

    constructor(evt) {
        this.evt = evt;
    }

    Run() {
        let files = this.evt.target.files;
        let fileType = files[0].type;
        let fileSizeBytes=files[0].size;
        let fileSizeKB=fileSizeBytes/1024;

        if (
            fileType !== "image/jpeg" &&
            fileType !== "image/pjpeg" &&
            fileType !== "image/png" &&
            fileType !== "image/gif"
        )
        {
            throw 'Invalid file type selected. Allowed files are jpeg, png and gif images.';
        }


        if(fileSizeKB>1024)
        {
            throw 'A maximum file size of 1MB is allowed.';
        }
    }
}