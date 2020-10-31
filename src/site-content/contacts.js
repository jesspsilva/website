import './styles/css/contacts.css';
import { icon, library } from '@fortawesome/fontawesome-svg-core';
import { faYoutubeSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(
    faLinkedin,
    faGithubSquare,
    faEnvelope
);

class Contacts {
    constructor(container, contact_icons, contacts_list, contact_icons_prefix, contact_links){
        this.container = container;
        this.contact_icons = contact_icons;
        this.contacts_list = contacts_list;
        this.contact_icons_prefix = contact_icons_prefix;
        this.contact_links = contact_links;
    }
    render(){
        let i;
        for(i=0; i < this.contacts_list.length; i++){
            let icons = icon({ prefix: `${this.contact_icons_prefix[i]}`, iconName: `${this.contact_icons[i]}` }).html;
            const html = `
                <div class="column">
                <a href="${this.contact_links[i]}" alt="contacts" target="_blank">${icons}</a>

                </div>
            `
            this.container.innerHTML += html;
        };

    }
}

export {Contacts as default};