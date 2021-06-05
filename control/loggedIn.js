import { Controller } from "./controller.js";
import { LoggedInView } from "../view/loggedIn.js";

class LoggedIn extends Controller
{
    constructor(app) {
        super(app);
        this._view = new LoggedInView();
    }

    init() {
        this._view.init(this._app.router.getActualRoute());
        return super.init();
    }
}

export { LoggedIn };