import React from 'react';
import './CSS/PastProjects.css';

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
                    <div className="carousel-item active">
                        <article className="card light">
                            <a className="card__img_link" href="/#">
                                <img src="https://picsum.photos/500/500?random=1" className="card__img" alt="Project" />
                            </a>
                            <div className="card__text t-dark">
                            <h1 className="card__title"><a href="/#">Test Project 1</a></h1>
                            <div className="card__bar"></div>
                            <div className="card__subtitle small">
                                <time dateTime="2021-07-01 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>July 2021
                                </time>
                            </div>
                            <div className="card__preview-txt">Test Project I worked on.</div>
                            
                            <h1 className="card__title">Core Skills</h1>
                            <ul className="card__tagbox">
                                <li key="84181654" className="tag__item"><i className="fab fa-swift mr-2"></i>SwiftUI</li>
                                <li key="546581813781" className="tag__item"><i className="fab fa-swift mr-2"></i>SwiftUI</li>
                                <li key="48154165186" className="tag__item"><i className="fab fa-swift mr-2"></i>SwiftUI</li>
                                <li key="8512854164" className="tag__item"><i className="fab fa-swift mr-2"></i>SwiftUI</li>
                                <li key="6481813548" className="tag__item"><i className="fab fa-swift mr-2"></i>SwiftUI</li>
                                <li key="51233528" className="tag__item"><i className="fab fa-swift mr-2"></i>SwiftUI</li>
                                <li key="765418932181" className="tag__item"><i className="fab fa-swift mr-2"></i>SwiftUI</li>
                            </ul>
                        </div>
                        </article>
                    </div>
                    <div className="carousel-item">
                    <article className="card light">
                            <a className="card__img_link" href="/#">
                                <img src="https://picsum.photos/500/500?random=2" className="card__img" alt="Project" />
                            </a>
                            <div className="card__text t-dark">
                            <h1 className="card__title"><a href="/#">Test Project 2</a></h1>
                            <div className="card__bar"></div>
                            <div className="card__subtitle small">
                                <time dateTime="2021-07-01 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>July 2021
                                </time>
                            </div>
                            <div className="card__preview-txt">Test Project I worked on.</div>
                            
                            <h1 className="card__title"><a href="/#">Core Skills</a></h1>
                            <ul className="card__tagbox">
                                <li key="56548844518" className="tag__item"><i className="fab fa-swift mr-2"></i>SwiftUI</li>
                            </ul>
                        </div>
                        </article>
                    </div>
                    <div className="carousel-item">
                    <article className="card light">
                            <a className="card__img_link" href="/#">
                                <img src="https://picsum.photos/500/500?random=3" className="card__img" alt="Project" />
                            </a>
                            <div className="card__text t-dark">
                            <h1 className="card__title"><a href="/#" target="_blank" rel="noreferrer"><div className="row"><div className="col-md-10">Test Project 3</div><div className="col-sm-2"><i className="fab fa-github"></i></div></div></a></h1>
                            <div className="card__bar"></div>
                            <div className="card__subtitle small">
                                <time dateTime="2021-07-01 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>July 2021
                                </time>
                            </div>
                            <div className="card__preview-txt">Test Project I worked on.</div>
                            
                            
                            <h1 className="card__title"><a href="/#">Core Skills</a></h1>
                            <ul className="card__tagbox">
                                <li key="564654584" className="tag__item"><i className="fab fa-swift mr-2"></i>SwiftUI</li>
                            </ul>
                        </div>
                        </article>
                    </div>
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
