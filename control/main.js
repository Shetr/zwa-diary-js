import { LoggedOut } from "./loggedOut.js";

class Main extends LoggedOut
{
    constructor(app) {
        super(app);
    }

    init() {
        return super.init();
    }
}

export { Main };