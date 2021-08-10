import React from 'react';
import './CSS/Work.css';
import WorkHistory from '../Variables/WorkHistory'

const Work = () => {
    return (
        <section id="work" className="d-flex min-vh-100">
            <div className="container">
                <div className="h1 text-center text-light" id="pageHeaderTitle">Work History</div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-timeline">
                            {WorkHistory.map( (job, id) => 
                                <div className="timeline" key={id}>
                                    <div className="timeline-content">
                                        <span className="timeline-year">{job.year}</span>
                                        <div className="timeline-icon">
                                            <i className={job.icon}></i>
                                        </div>
                                        <h3 className="title">{job.title}</h3>
                                        <ul className="fa-ul description">
                                        {job.description.map((item, idKey) => 
                                            <li key={idKey}><span class="fa-li"><i class="fas fa-check"></i></span>{item}</li>
                                        )}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work
