import './site-content/styles/css/reset.css'
import NavBarLink from './site-content/navbar';
import Projects from './site-content/projects-base';
import ProjectsUI from './site-content/projects-ui';
import Skills from './site-content/skills';
import Contacts from './site-content/contacts';
import './site-content/content';

// navbar
const navbar = document.querySelectorAll('.nav-links');

const navbarLinks = ['about', 'portfolio', 'skills', 'contacts'];
const navbarLinksText = ['About me', 'Portfolio', 'Skills', 'Contacts'];

// list of projects
const projectsList = document.querySelector('.projects');

// render data on DOM
const aboutMe = new NavBarLink(navbar, navbarLinks, navbarLinksText).render();

// render projects on DOM
const projectsUI = new ProjectsUI(projectsList);
const projects = new Projects();
projects.getData(data => projectsUI.render(data));

// skills
const skills_container = document.querySelector('.skills .container');
const skills_titles = ['Soft Skills', 'Front-end Skills'];
const skills_text = ["It's important to develop skills that help us on or daily basis.", "I like to code and it's what I see myself doing in the rest of my professional life. I like to bring ideas to life."];
const skills_subtitle = ["Main skills", "Languages"];
const skills_image = ["images/soft.png", "images/frontend.png"];
const skills_tools = ["Visual Studio Code, Github, Terminal, Git, Adobe Illustrator, Adobe XD, Photoshop"];
const skills = ["Team Work, Organization, Motivation, Communication, Adaptability, Process improvement, Willingness to learn", "HTML, CSS, SASS, JavaScript"];
const learning_skills = ["ReactJS, React Native"];
// render skills on DOM
const skills_data = new Skills(skills_container, skills_titles, skills_text, skills_subtitle, skills_image, skills_tools, skills, learning_skills).render();

// render contacts on DOM
const contacts_list = ["Linkedin", "GitHub", "Email"];
const contact_icons = ["linkedin", "github-square", "envelope"];
const contact_icons_prefix = ["fab", "fab", "fas"];
const contact_links = ["https://www.linkedin.com/in/jessipsilva/", "https://github.com/jesspsilva", "mailto:jps936@hotmail.com"];
const contacts_container = document.querySelector('.contacts .container');
const contacts = new Contacts(contacts_container, contact_icons, contacts_list, contact_icons_prefix, contact_links).render();