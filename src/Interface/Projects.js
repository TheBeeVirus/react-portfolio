import React from 'react'
import './CSS/Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="d-flex min-vh-100">
        	<div className="container py-2">
                <div className="h1 text-center text-dark" id="pageHeaderTitle">Current Project</div>

                <article className="card light green">
                    <a className="card__img_link" href="/#">
                        <img className="card__img" src="https://picsum.photos/1000/1000" alt="Project" />
                    </a>
                    <div className="card__text t-dark">
                        <h1 className="card__title green"><a href="/#">Project Title</a></h1>
                        <div className="card__bar"></div>
                        <div className="card__subtitle small">
                            <time datetime="2020-05-25 12:00:00">
                                <i class="fas fa-calendar-alt"></i>Mon, May 25th 2020
                            </time>
                        </div>
                        <div className="card__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                        
                        <h1 className="card__title green"><a href="/#">Core Skills</a></h1>
                        <ul className="card__tagbox">
                            <li className="tag__item"><i className="fa fa-tag mr-2"></i>Podcast</li>
                            <li className="tag__item"><i className="fa fa-clock mr-2"></i>55 mins.</li>
                            <li className="tag__item play green">
                                <a href="/#"><i class="fa fa-play mr-2"></i>Play Episode</a>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Projects
