
class LoginView
{
    constructor(){
        this._headlineEl = document.querySelector("header h1");

        this._headline = "";
    }

    init() {
        this._headlineEl.innerHTML = this._headline;
    }
}

export { LoginView };