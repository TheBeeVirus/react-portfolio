import React from 'react';
import './CSS/PastProjects.css';
import PastProject from '../Variables/PastProject';

const BetaPastProjects = () => {

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
            <div className="cardbox">
                <div className="scrollbox" id="scrollbox">
                {PastProject.map( (project, index) =>
                            
                            <div className="carditem" key={index}>
                                
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
                                
                            </div>
                            
                            )}
                </div>
                <span className="btn prev"></span>
                <span className="btn next"></span>

                
            </div>

    )
}

export default BetaPastProjects;