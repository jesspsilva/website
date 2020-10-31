import './styles/css/portfolio.css'

class ProjectsUI{
    constructor(list){
        this.list = list;
    }
    // get all the projects on the database
    render(data){
        const html = `
        <li class="portfolio-item">
            <figure class="image pushup"><img class="project-img"  src="${data.img_url}" alt="${data.img_alt}">
                <figcaption>
                    <h4 class="title">${data.title}</h4>
                    <a class="button" href="${data.link}" target="_blank">
                        <span>${data.button_text}</span>
                        <span class="icon">
                        <svg class="svg-inline--fa fa-angle-right fa-w-8" aria-hidden="true" focusable="false" data-prefix="fas"
                            data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                            data-fa-i2svg="">
                            <path fill="currentColor"
                            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z">
                            </path>
                        </svg>
                        </span>
                    </a>
                </figcaption>
            </figure>
        </li>
        `;
        this.list.innerHTML += html;
    }
}

export {ProjectsUI as default};