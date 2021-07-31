import React from 'react';
import './CSS/Work.css';

const Work = () => {
    return (
        <section id="work" className="d-flex min-vh-100">
            <div class="container">
                <div className="h1 text-center text-light" id="pageHeaderTitle">Work History</div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="main-timeline">
                            <div class="timeline">
                                <div class="timeline-content">
                                    <span class="timeline-year">2019-2020</span>
                                    <div class="timeline-icon">
                                        <i class="fas fa-tools"></i>
                                    </div>
                                    <h3 class="title">Field Service Technician / Walman Instruments</h3>
                                    <p class="description">
                                    Responsible for installing, providing maintenance, troubleshooting and repairs to eye doctors and surgeons in
                                    Washington, Oregon, Idaho and Montana. Entrusted with a company vehicle and credit card. Maintain
                                    monthly travel and expense reports. Helped customers budget repairs and plan out maintenance
                                    services to keep costs low.
                                    </p>
                                </div>
                            </div>
                            <div class="timeline">
                                <a href="/#" class="timeline-content">
                                    <span class="timeline-year">2019</span>
                                    <div class="timeline-icon">
                                        <i class="fa fa-rocket"></i>
                                    </div>
                                    <h3 class="title">Web Development</h3>
                                    <p class="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work
