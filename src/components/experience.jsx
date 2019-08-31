import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="experience">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Experience</span>
                <h2 className="colorlib-heading animate-box">Work Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Senior Software Engineer / Bizongo - Mumbai, MH </a> <span>10/2018 - Parent</span></h2>
                        <p>
                        <ul>
                            <li>Developed and designed supply chain and fulfillment system for managing entire company business</li>
                            <li>Initiated efforts to migrate legacy applications to micro service platform</li>
                            <li>Collaborated with project managers, developers, quality assurance and customers to resolve technical issues</li>
                            <li>Analyzed code and corrected errors</li>
                            <li>Collaborated with product and engineering team members to define and develop new product concepts</li>
                            <li>Mentored and developed junior developers and engineers</li>
                             <li>Drafted detailed design objectives and developed architectural and system design documents</li>
                             <li>Collaborated with development team members to create and integrate high availability solutions for critical problems</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Software Engineer / Bizongo - Mumbai, MH</a> <span>08/2017 - 09/2018</span></h2>
                        <p>
                          <ul>
                            <li>Develop and design catalogue management system for online marketplace</li>
                            <li>Performed server code optimization using database indexing</li>
                            <li> Analyzed system requirements and used systematic approaches to implement and document development tasks</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Senior Software Engineer / Browntape Technologies Pvt. Ltd. - Pilerne, Goa</a> <span>03/2015 - 07/2017</span></h2>
                        <p>
                          <strong>Project Name: app.browntape.com (A single console for Multi-channel online selling)</strong>
                          <ul>
                            <li>It's a multi channel E-commerce product which is used to manage various E-commerce marketplaces sellers to simplify the things</li>
                            <li>Creating and maintain the cron jobs for the various market places on specified intervals</li>
                            <li>Building and maintaining real time orders, Inventory, shipping, order delayed jobs</li>
                            <li>Creation of the functions that enables all these features on various marketplaces based on their API if available else scrapped the E-commerce market place</li>
                            <li>These Cron jobs basically fetch the orders, manage inventory, and maintain the order status and various other E-commerce related tasks</li>
                          </ul>
                            </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Web Technologist / Browntape Technologies Pvt. Ltd. - Pilerne, Goa</a> <span>01/2014 - 03/2015</span></h2>
                        <p><strong>Project Name: Picchamp[Internal App</strong>
                            <ul>
                              <li>It is a internal application for Browntape which was designed for converting images first but as time passes the development of this app gained a lot of features so now its a huge app with some cool applications</li>
                               <li>Resolved customer issues by establishing workarounds and solutions and by debugging and creating defect fixes</li>
                               <li>Developed new, efficient, and well-tested code for a variety of different projects</li>
                               <li>Communicated with back-end servers to provide real-time updated information</li>
                            </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
