/**
 * @copyright 2025 Alice Dias
 * @license Apache-2.0
 */

import React from 'react'



const experiences = [
    {
        id: 1,
        title: "IT Department Member",
        company: "Núcleo de Estudantes de Informática - NEI ESTG",
        duration: "Out 2024 - Present",
        description: ""
    },
    {
        id: 2,
        title: "Web Development Team Member",
        company: "Núcleo de Estudantes de Informática - NEI ESTG",
        duration: "Nov 2023 - May 2024",
        description: "Development of the 'Núcleo de Estudantes de Informática - Escola de Tecnologia e Gestão de Felgueiras' website."
    },
    {
        id: 3,
        title: "Internship",
        company: "Assistência Online",
        duration: "Mar 2022 - Jul 2022",
        description: "A platform was created to enable SMS scheduling and sending the SMS automatically."
    },
    {
        id: 4,
        title: "Internship",
        company: "ANPRI - National Association of Computer Science Teachers",
        duration: "Mar 2022 - Jul 2022",
        description: "Mobile Development with Web Technology. Proficiency in JavaScript and CSS through the Adobe Brackets platform. Creation of hybrid applications using Adobe PhoneGap."
    },
    {
        id: 5,
        title: "Assistant",
        company: "Famalicão Extreme Gaming",
        duration: "5 Dec 2019 - 6 Dec 2019",
        description: "I organized and set up the ANPRI booth, ensuring equipment and materials were arranged correctly. Led live demonstrations of robots and drones, explaining their functionality and relevance. Interacted with visitors of all ages, educating them on technological advances in robotics and drones. Collaborated with the team to create an engaging experience for all booth visitors."
    },
    {
        id: 6,
        title: "Participant",
        company: "Apps for Good",
        duration: "Mar 2019 - Jul 2019",
        description: "I developed and contributed to the creation of the Study+ software, an innovative tool designed to support studying for students. I was responsible for designing the user interface, ensuring an intuitive and pleasant user experience. I collaborated in a multidisciplinary team, improving communication, problem-solving, and teamwork skills."
    },
    {
        id: 7,
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