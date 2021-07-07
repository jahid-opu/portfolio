import React from 'react';

const Skills = () => {
    return (
        <section className="skills-section">
            <div className="container">
            <h2>My Skills</h2>
            <div className="devider"></div>
            <div className="row">
                <div className="col-md-6 p-5">
                <div className="progress-title">
                        <h4>JAVASCRIPT</h4>
                      
                        <div className="progress">
                            <div className="progress-bar" style={{width: '65%', background: '#ef2d5c'}}>
                                <div className="progress-value">65%</div>
                            </div>
                        </div>
                    </div>

                    <div className="progress-title">
                        <h4>REACT</h4>
                        <div className="progress">
                            <div className="progress-bar" style={{width: '80%', background: '#ff9900'}}>
                                <div className="progress-value">80%</div>
                            </div>
                        </div>
                    </div>

                    <div className="progress-title">
                        <h4>CSS3 & BOOTSTRAP</h4>
                        <div className="progress">
                            <div className="progress-bar" style={{width: '92%', background: '#828700'}}>
                                <div className="progress-value">92%</div>
                            </div>
                        </div>
                    </div>

                    <div className="progress-title">
                        <h4>NODE.JS</h4>
                        <div className="progress">
                            <div className="progress-bar" style={{width: '87%', background: '#00BBDD'}}>
                                <div className="progress-value">65%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 p-5">
                <div className="progress-title">
                        <h4>HTML</h4>
                        <div className="progress">
                            <div className="progress-bar" style={{width: '95%', background: '#00BBDD'}}>
                                <div className="progress-value">95%</div>
                            </div>
                        </div>
                    </div>

                    <div className="progress-title">
                        <h4>JAVA</h4>
                        <div className="progress">
                            <div className="progress-bar" style={{width: '60%', background: '#828700'}}>
                                <div className="progress-value">60%</div>
                            </div>
                        </div>
                    </div>

                    <div className="progress-title">
                        <h4>MONGODB</h4>
                        <div className="progress">
                            <div className="progress-bar" style={{width: '80%', background: '#ff9900'}}>
                                <div className="progress-value">80%</div>
                            </div>
                        </div>
                    </div>

                    <div className="progress-title">
                        <h4>WORDPRESS</h4>
                        <div className="progress">
                            <div className="progress-bar" style={{width: '70%', background: '#ef2d5c'}}>
                                <div className="progress-value">70%</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
        </section>
    );
};

export default Skills;