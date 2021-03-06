import React from 'react';
import './CSS/Projects.css';
import CurProjectVideo from '../Videos/BeeHiveiOSZ.mp4';
import FeaturedProject from '../Variables/FeaturedProject';
import PastProjects from '../Interface/PastProjects';

const Projects = () => {
    return (
        <section id="projects" className="d-flex min-vh-100">
        	<div className="container py-2">
                <div className="h1 text-center text-dark" id="pageHeaderTitle">Current Project</div>
                {FeaturedProject.map( (project, index) =>
                    <article className="card light" key={index}>
                        <a className="card__img_link" href="/#projects">
                            <video autoPlay="autoPlay" muted loop={true} className="card__img">
                                <source src={CurProjectVideo} type="video/mp4" />
                            </video>
                        </a>

                        <div className="card__text t-dark">
                            <h1 className="card__title"><a href="/#projects">{project.title}</a></h1>
                            <div className="card__bar"></div>
                            <div className="card__subtitle small">
                                <time dateTime="2021-06-01 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>{project.date}
                                </time>
                            </div>
                            <div className="card__preview-txt">{project.discription}</div>
                            
                            <h1 className="card__title"><a href="/#projects">Core Skills</a></h1>
                            <ul className="card__tagbox">
                                {project.skills.map((skill, i) =>
                                    <li key={i} className="tag__item"><i className={skill.fontAwesome}></i>{skill.skillName}</li>
                                )}
                            </ul>
                        </div>

                        
                    </article>
                )}
                <div className="h1 text-center text-dark" id="pageHeaderTitle">Past Projects</div>
                <PastProjects />
            </div>
        </section>            
    )
}

export default Projects
