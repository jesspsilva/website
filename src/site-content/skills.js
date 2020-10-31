import './styles/css/skills.css'

class Skills {
    constructor(container, skills_title, skills_text, skills_subtitle, skills_img, skills_tools, skills, learning_skills){
        this.container = container;
        this.skills_title = skills_title;
        this.skills_text = skills_text;
        this.skills_subtitle = skills_subtitle;
        this.skills_img = skills_img;
        this.skills_tools = skills_tools;
        this.skills = skills;
        this.learning_skills = learning_skills;
    }
    render(){
        let i;
        for(i=0; i < this.skills_title.length; i++){
            if(this.skills_title[i] == "Front-end Skills"){
                const html = `
                    <div class="column">
                        <figure class="image pushup"><img class="project-img"  src="${this.skills_img[i]}" alt="skills_image"></figure>
                        <h2>${this.skills_title[i]}</h2>
                        <p>${this.skills_text[i]}</p>
                        <h3>${this.skills_subtitle[i]}</h3>
                        <p>${this.skills[i]}</p>
                        <h4>Learning</h4>
                        <p>${this.learning_skills}</p>
                        <h3>Tools</h3>
                        <p>${this.skills_tools}</p>
                    </div>
                `
                this.container.innerHTML += html;
            } else {
                const html = `
                    <div class="column">
                        <figure class="image pushup"><img class="project-img"  src="${this.skills_img[i]}" alt="skills_image"></figure>
                        <h2>${this.skills_title[i]}</h2>
                        <p>${this.skills_text[i]}</p>
                        <h3>${this.skills_subtitle[i]}</h3>
                        <p>${this.skills[i]}</p>
                    </div>
                `
             this.container.innerHTML += html;
            }
        };

    }
}

export {Skills as default};