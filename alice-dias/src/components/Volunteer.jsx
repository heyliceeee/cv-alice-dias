/**
 * @copyright 2025 Alice Dias
 * @license Apache-2.0
 */



const volunteers = [
    {
        id: 1,
        title: "Design Team Member",
        company: "ESTG Connect",
        duration: "Out 2024 - May 2025",
        description: "Collaborated on the visual identity and graphic communication of the ESTG Connect tech event. Designed logos, icons, banners, posters, brochures, speaker templates, and directional signs. Created sponsor promo videos and event-day content. Worked with the design/communication team to ensure a cohesive and professional image across digital and physical formats."
    },
    {
        id: 2,
        title: "IT Department Member",
        company: "NEI - ESTG",
        duration: "Out 2024 - Set 2025",
        description: "Supported the live stream setup for an online League of Legends tournament, including the creation of custom overlays and scene transitions. Ensured a smooth broadcast experience across platforms, combining technical execution with visual design."
    },
    {
        id: 3,
        title: "Web Development Team Member",
        company: "NEI - ESTG",
        duration: "Nov 2023 - May 2024",
        description: "Development of the 'Núcleo de Estudantes de Informática - ESTG Polytechnic Institute of Porto' website."
    },
    {
        id: 4,
        title: "Assistant",
        company: "Famalicão Extreme Gaming",
        duration: "5 Dec 2019 - 6 Dec 2019",
        description: "I organized and set up the ANPRI booth, ensuring equipment and materials were arranged correctly. Led live demonstrations of robots and drones, explaining their functionality and relevance. Interacted with visitors of all ages, educating them on technological advances in robotics and drones. Collaborated with the team to create an engaging experience for all booth visitors."
    },
    {
        id: 5,
        title: "Participant",
        company: "Apps for Good",
        duration: "Mar 2019 - Jul 2019",
        description: "I developed and contributed to the creation of the Study+ software, an innovative tool designed to support studying for students. I was responsible for designing the user interface, ensuring an intuitive and pleasant user experience. I collaborated in a multidisciplinary team, improving communication, problem-solving, and teamwork skills."
    },
];

const Volunteer = () => {
    return (
        <section id="volunteer" className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">Volunteer Work</h2>

                <div className="education-timeline">
                    {volunteers.map(({ id, title, company, duration, description }) => (
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

export default Volunteer