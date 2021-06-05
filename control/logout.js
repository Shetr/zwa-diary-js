import { LoggedIn } from "./loggedIn.js";

class Logout extends LoggedIn
{
    constructor(app) {
        super(app);
    }

    init() {
        let progress = super.init();
        return progress;
    }
}

export { Logout };