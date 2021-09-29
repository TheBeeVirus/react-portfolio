import React from 'react';
import './CSS/Education.css';
import Schools from '../Variables/Schools'

const Education = () => {
    return (
        <section id="education" className="d-flex min-vh-100">
        	<div className="container py-2">
                <div className="h1 text-center text-dark" id="pageHeaderTitle">Education</div>
                {Schools.map( (school, index) =>
                    <article className="card light" key={index}>
                         {/* <a className="card__img_link" href="/#"> */}
                         {/* Was going to add Certificate Links, maybe will do that later. */}
                                <img src={school.image} className="card__img" alt="Project" />
                        {/* </a> */}
                        <div className="card__text t-dark">
                            <h1 className="card__title">{/* <a href="/#"> */}{school.name}{/*</a>*/}</h1>
                            <div className="card__bar"></div>
                            <div className="card__degree">{school.degree}</div>
                            <div className="card__subtitle small">
                                <i className="fas fa-calendar-alt mr-2"></i>{school.attended}
                            </div>
                            <div className="card__preview-txt">{school.discription}</div>
                        </div>

                        
                    </article>
                )}
            </div>
        </section>
    )
}

export default Education
