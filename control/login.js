import { LoggedOut } from "./loggedOut.js";

class Login extends LoggedOut
{
    constructor(app) {
        super(app);
    }

    init() {
        return super.init();
    }
}

export { Login };