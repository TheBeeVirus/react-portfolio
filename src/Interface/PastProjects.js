import React from 'react';
import './CSS/PastProjects.css';
import PastProject from '../Variables/PastProject';

const PastProjects = () => {
    return (
        <div className="container-sm py-2 pastProjects">
            <div className="h1 text-center text-dark" id="pageHeaderTitle">Past Projects</div>
            <div id="carouselProjects" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselProjects" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselProjects" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselProjects" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    {PastProject.map( (project, index) =>
                        
                    <div className={index ? "carousel-item" : "carousel-item active" } key={index}>
                        <article className="card light">
                            <a className="card__img_link" href="/#">
                                <img src={project.image} className="card__img" alt="Project" />
                            </a>
                            <div className="card__text t-dark">
                                <h1 className="card__title"><a href="/#">{project.name}</a></h1>
                                <div className="card__bar"></div>
                                <div className="card__subtitle small">
                                    <time dateTime="{project.dateFormat}">
                                        <i className="fas fa-calendar-alt mr-2"></i>{project.date}
                                    </time>
                                </div>
                                <div className="card__preview-txt">{project.description}</div>
                                
                                <h1 className="card__title">Core Skills</h1>
                                <ul className="card__tagbox">
                                    {project.skills.map( (skill, idIndex) =>
                                        <li key={idIndex} className="tag__item"><i className={skill.icon}></i>{skill.name}</li>
                                    )}
                                </ul>
                            </div>
                        </article>
                    </div>
                    
                    )}

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselProjects" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselProjects" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default PastProjects;
