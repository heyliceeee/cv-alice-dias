/**
 * @copyright 2025 Alice Dias
 * @license Apache-2.0
 */

import React from 'react'



const educations = [
    {
        id: 1,
        degree: "Software Engineering Degree Student",
        institution: "ESTG - Polytechnic Institute of Porto",
        duration: "2022 - Now",
        subjects: ["Agile Methodologies", "ADT", "AI", "Multithreading", "Java", "Python", "C", "C#", "Flutter", "ASP .NET Core", "Spring Boot"],
    },
    {
        id: 2,
        degree: "CTESP Development Web and Mobile Devices",
        institution: "ESTG - Polytechnic Institute of Porto",
        duration: "2020 - 2022",
        subjects: ["Node.js", "UML", "Ionic", "Bootstrap", "JavaScript", "iOS Development", "Android Development", "React.js", "Swift", "MongoDB", "AngularJS", "PHP", "SQL"],
    },
    {
        id: 3,
        degree: "Professional Computer Programmer Course",
        institution: "Tomaz Pelayo High School",
        duration: "2017 - 2020",
        subjects: ["Android Development", "Java", "HTML", "CSS", "PHP", "SQL"],
    },
];


const Education = () => {
    return (
        <section id='education' className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">My Education Journey</h2>

                <div className="education-timeline">
                    {educations.map(({ id, degree, institution, duration, subjects }) => (
                        <div key={id} className="education-item">
                            <div className="education-content">
                                <h3 className="education-title">{degree}</h3>
                                <p className="education-institution">{institution}</p>
                                <p className="education-duration">{duration}</p>
                                <p className="text-sm text-zinc-500">
                                    {subjects.join(" • ")}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education