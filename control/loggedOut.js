import { Controller } from "./controller.js";
import { LoggedOutView } from "../view/loggedOut.js";

class LoggedOut extends Controller
{
    constructor(app) {
        super(app);
        this._view = new LoggedOutView();
    }

    init() {
        this._view.init(this._app.router.getActualRoute());
        return super.init();
    }
}

export { LoggedOut };