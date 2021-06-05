import { LoginView } from "../view/login.js";
import { LoggedOut } from "./loggedOut.js";

class Login extends LoggedOut
{
    constructor(app) {
        super(app);
        this._view = new LoginView();
    }

    init() {
        let progress = super.init();
        if(progress) {
            this._view.init();
            this._view.getForm().addEventListener("submit", (e) => {this._submitForm(); e.preventDefault();});
        }
        return progress;
    }

    _submitForm() {
        let email = this._view.getEmailInput().value;
        let password = this._view.getPasswordInput().value;
        let user = this._findUser(this._view.getEmailInput().value);
        console.log(user);
        /*if(user == null || (user != null && !user.doesPasswordMatch(password))) {
            this._view.setError("Incorrect email or password.");
            return;
        }
        this._app.user = user;
        this._app.router.routeTo("diary");*/
    }

    _findUser(email) {
        let users = this._app.getUsers().getData();
        let foundUser = null;
        users.forEach((user) => {
            if(user.email == email) {
                foundUser = user;
            }
        });
        return foundUser;
    }
}

export { Login };