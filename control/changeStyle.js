import { LoggedIn } from "./loggedIn.js";
import { ChangeStyleView } from "../view/changeStyle.js";

class ChangeStyle extends LoggedIn
{
    constructor(app) {
        super(app);
        this._view = new ChangeStyleView();
    }

    init() {
        let progress = super.init();
        if(progress) {
            this._view.init();
        }
        return progress;
    }
}

export { ChangeStyle };