/**
 * @copyright 2025 Alice Dias
 * @license Apache-2.0
 */

import React from 'react'



const experiences = [
    {
        id: 1,
        title: "Internship",
        company: "ESTG - Polytechnic Institute of Porto",
        duration: "Feb 2025 - Jul 2025",
        description: "A project was carried out aiming to predict hourly energy consumption based on time series and exogenous variables, using traditional Machine Learning algorithms and models specialized in time series."
    },
    {
        id: 2,
        title: "Internship",
        company: "Assistência Online",
        duration: "Mar 2022 - Jul 2022",
        description: "A platform was created to enable SMS scheduling and sending the SMS automatically."
    },
    {
        id: 3,
        title: "Internship",
        company: "ANPRI - National Association of Computer Science Teachers",
        duration: "Mar 2022 - Jul 2022",
        description: "Mobile Development with Web Technology. Proficiency in JavaScript and CSS through the Adobe Brackets platform. Creation of hybrid applications using Adobe PhoneGap."
    },
    {
        id: 4,
        title: "Internship",
        company: "Lantal Textiles",
        duration: "Set 2018 - Oct 2018",
        description: "A search of the company's articles was organized, to later create a Database of articles. The Database was intended to be used for internal use in the company, mainly by the Samples Department."
    },
];


const Experience = () => {
    return (
        <section id='experience' className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">Professional Experience</h2>

                <div className="education-timeline">
                    {experiences.map(({ id, title, company, duration, description }) => (
                        <div key={id} className="education-item">
                            <div className="education-content">
                                <h3 className="education-title">{title}</h3>
                                <p className="education-institution">{company}</p>
                                <p className="education-duration">{duration}</p>
                                <p className="education-duration">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience