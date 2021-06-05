
class ChangeStyleView
{
    constructor(){
        this._headlineEl = document.querySelector("header h1");
        this._mainEl = document.querySelector("main");

        this._headline = "Change style";
    }

    init() {
        this._headlineEl.innerHTML = this._headline;
        document.title = this._headline;
        
        this._mainEl.innerHTML = "";
    }
}

export { ChangeStyleView };