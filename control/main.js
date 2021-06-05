import { LoggedOut } from "./loggedOut.js";
import { MainView } from "../view/main.js";

class Main extends LoggedOut
{
    constructor(app) {
        super(app);
        this._view = new MainView();
    }

    init() {
        let progress = super.init();
        if(progress) {
            this._view.init();
        }
        return progress;
    }
}

export { Main };