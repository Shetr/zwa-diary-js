import { Router } from "./router.js";
import { AppStorage } from "./appStorage.js";

import { Main } from "./main.js";
import { Login } from "./login.js";
import { Register } from "./register.js";
import { Diary } from "./diary.js";
import { Notebook } from "./notebook.js";
import { Logout } from "./logout.js";
import { ChangeStyle } from "./changeStyle.js";

import { User } from "../model/user.js";

class App
{
    constructor() {
        let routes = {
            main: new Main(this),
            login: new Login(this),
            register: new Register(this),
            diary: new Diary(this),
            notebook: new Notebook(this),
            logout: new Logout(this),
            changeStyle: new ChangeStyle(this)
        };
        let defaultRoute = {
            name: "main",
            control: routes.main
        };
        this._router = new Router(routes, defaultRoute);
        this._router.route();
        this._storage = new AppStorage("users", [User]);
        this._storage.load();
    }
    
}

export { App };