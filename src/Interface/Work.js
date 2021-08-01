import React from 'react';
import './CSS/Work.css';
import WorkHistory from '../Variables/WorkHistory'

const Work = () => {
    return (
        <section id="work" className="d-flex min-vh-100">
            <div class="container">
                <div className="h1 text-center text-light" id="pageHeaderTitle">Work History</div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="main-timeline">
                            {WorkHistory.map( job => 
                                <div class="timeline">
                                    <div class="timeline-content">
                                        <span class="timeline-year">{job.year}</span>
                                        <div class="timeline-icon">
                                            <i class={job.icon}></i>
                                        </div>
                                        <h3 class="title">{job.title}</h3>
                                        <p class="description">
                                        {job.description}
                                        </p>
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
