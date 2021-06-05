import { Controller } from "./controller.js";
import { LoggedOutView } from "../view/loggedOut.js";

class LoggedOut extends Controller
{
    constructor(app) {
        super(app);
        this._loggedOutView = new LoggedOutView();
    }

    init() {
        this._loggedOutView.init(this._app.router.getActualRoute());
        return super.init();
    }
}

export { LoggedOut };