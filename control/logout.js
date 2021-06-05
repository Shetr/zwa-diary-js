import { LoggedIn } from "./loggedIn.js";

class Logout extends LoggedIn
{
    constructor(app) {
        super(app);
    }

    init() {
        return super.init();
    }
}

export { Logout };