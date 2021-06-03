
class Router
{
    constructor(routes, defaultRoute) {
        window.addEventListener('popstate', e => this.route());
        this._routes = routes;
        this._defaultRoute = defaultRoute;
    }

    route() {
        let routeFound = false;
        const hash = window.location.hash;
        for (const [routeName, routeControl] of Object.entries(this._routes)) {
            if("#" + routeName == hash) {
                if(routeControl.init()) {
                    routeFound = true;
                }
                break;
            }
        }
        if(!routeFound) {
            this.routeDefault();
        }
    }

    routeDefault() {
        this._defaultRoute.control.init();
        window.location.hash = "#" + this._defaultRoute.name;
    }
}

export { Router };