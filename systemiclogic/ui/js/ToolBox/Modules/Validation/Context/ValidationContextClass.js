export default class ContextClass{

    constructor(InterFaceClass)
    {
        this.InterFaceClass=InterFaceClass;
    }

    StartValidation()
    {
        return this.InterFaceClass.executeValidation();
    }
}