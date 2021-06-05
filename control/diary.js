import { LoggedIn } from "./loggedIn.js";
import { DiaryView } from "../view/diary.js";

class Diary extends LoggedIn
{
    constructor(app) {
        super(app);
        this._view = new DiaryView();
    }

    init() {
        let progress = super.init();
        if(progress) {
            this._view.init();
        }
        return progress;
    }
}

export { Diary };