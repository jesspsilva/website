import './styles/css/navbar.css'
import './styles/css/main.css'

class NavBarLink {
    constructor(navbar, links, linksName){
        this.navbar = navbar;
        this.links = links;
        this.linksName = linksName;
    }
    render(){
        let i;
        this.navbar.forEach(nav => {
            for(i=0; i < this.links.length; i++){
                const html = `
                <li class="navbar-link">
                    <a class="navbar-text" href="#${this.links[i]}">${this.linksName[i]}</a>
                </li>`
                nav.innerHTML += html;
            };
        });

    }
}

export {NavBarLink as default};