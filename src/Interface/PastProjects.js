import React from 'react';
import './CSS/PastProjects.css';
import PastProject from '../Variables/PastProject';

const PastProjects = () => {

    function createImage(pImg, pLink)
    {
        let tags = <img src={pImg} className="card__img" alt="Project" />;
        if(pLink) {
            tags = <a href={pLink} className="card__img_link" target="_blank" rel="noreferrer">{tags}</a>;
        }
        return tags;
    }

    function createProjectTitle(pName, pLink) {
        let name = pName;
        if (pLink){
            name = <a href={pLink} target="_blank" rel="noreferrer">{name}</a>;
        }
        return name;
    }

    return (
        <div className="container-sm py-2 pastProjects">
            <div className="h1 text-center text-dark" id="pageHeaderTitle">Past Projects</div>
            <div id="carouselProjects" className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="15000" data-bs-touch="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselProjects" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselProjects" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselProjects" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    {PastProject.map( (project, index) =>
                        
                    <div className={index ? "carousel-item" : "carousel-item active" } key={index}>
                        <article className="card light">
                            {createImage(project.image, project.link)}
                            <div className="card__text t-dark">
                                <h1 className="card__title">
                                    {createProjectTitle(project.name, project.link)}
                                </h1>
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
