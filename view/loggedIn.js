
class LoggedInView
{
    constructor(){
        this._navEl = document.querySelector("header nav");
        this._userEl = document.getElementById("user");

        this._user = "";
    }

    init(selectedPage) {
        this._navEl.innerHTML = this._nav(selectedPage);
        this._userEl.innerHTML = this._user;
    }

    _nav (selectedPage) {
        return String.raw`
            <ul>
                <li>
                    <a href="#diary" ${selectedPage == "diary" ? 'id="pageSelected"' : ""}>Diary</a>
                </li>
                <li>
                    <a href="#notebook" ${selectedPage == "notebook" ? 'id="pageSelected"' : ""}>Notebook</a>
                </li>
                <li>
                    <a href="#logout">Logout</a>
                </li>
            </ul>
        `;
    }
}

export { LoggedInView };