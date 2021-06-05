
class MainView
{
    constructor(){
        this._headlineEl = document.querySelector("header h1");
        this._mainEl = document.querySelector("main");

        this._headline = "Diary / Notebook";
    }

    init() {
        this._headlineEl.innerHTML = this._headline;
        document.title = this._headline;
        
        this._mainEl.innerHTML = "";
    }
}

export { MainView };

function mainTemplate(navigation, pageName, userEmail, page, pageBody) {
    return String.raw`
        <div id="pageHeader">
			${navigation}
			<h1>
				${pageName}
			</h1>
			<div id="user">
                ${userEmail === '' ? '' : String.raw`
                    <div>
						Loged&nbsp;in:&nbsp;${userEmail}
					</div>
					<div class="styleLink">
						<a class="navLink" href="changeStyle.php" ${"changeStyle" === $page ? 'id="pageSelected"' : '' } >Change style</a>
					</div>
                `}
			</div>
		</div>

		<div id="pageBody">
			${pageBody}
		</div>

		<footer>
			&copy; Petr Šádek 2021
		</footer>
    `;
}