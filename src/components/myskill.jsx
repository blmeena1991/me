import React, { Component } from 'react'

export default class MySkill extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-skills" data-section="skills">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">My Specialty</span>
                <h2 className="colorlib-heading animate-box">My Skills</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                <div className="progress-wrap">
                  <h3>PHP, CAKEPHP</h3>
                  <div className="progress">
                    <div className="progress-bar color-1" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>
                      <span>95%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                <div className="progress-wrap">
                  <h3>RUBY, ROR</h3>
                  <div className="progress">
                    <div className="progress-bar color-2" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                      <span>90%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                <div className="progress-wrap">
                  <h3>REACT JS</h3>
                  <div className="progress">
                    <div className="progress-bar color-3" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>
                      <span>60%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                <div className="progress-wrap">
                  <h3>Java</h3>
                  <div className="progress">
                    <div className="progress-bar color-4" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                      <span>40%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                <div className="progress-wrap">
                  <h3>DATABASE</h3>
                  <div className="progress">
                    <div className="progress-bar color-5" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                      <span>80%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                <div className="progress-wrap">
                  <h3>AWS</h3>
                  <div className="progress">
                    <div className="progress-bar color-6" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                      <span>80%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
