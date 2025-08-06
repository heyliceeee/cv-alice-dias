/**
 * @copyright 2025 Alice Dias
 * @license Apache-2.0
 */

import React from 'react'
import SkillCard from './SkillCard';



const skillItem = [ 
    // 🔹 Data & AI (maior destaque)
    {
        imgSrc: '/python.svg',
        label: 'Python',
        desc: 'Language'
    },
    {
        imgSrc: '/sql.svg',
        label: 'SQL',
        desc: 'Database'
    },
    {
        imgSrc: '/pandas.svg',
        label: 'Pandas',
        desc: 'Data Analysis'
    },
    {
        imgSrc: '/scikit.svg',
        label: 'Scikit-learn',
        desc: 'Machine Learning'
    },
    {
        imgSrc: '/yolov8.svg',
        label: 'YOLOv8',
        desc: 'Computer Vision'
    },

    // 🔹 Backend & Core Languages
    {
        imgSrc: '/csharp.svg',
        label: 'C#',
        desc: 'Language'
    },
    {
        imgSrc: 'java.svg',
        label: 'Java',
        desc: 'Language'
    },
    {
        imgSrc: '/nodejs.svg',
        label: 'NodeJS',
        desc: 'Web Server'
    },

    // 🔹 Frontend & Mobile
    {
        imgSrc: '/react.svg',
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc: '/flutter.svg',
        label: 'Flutter',
        desc: 'Framework'
    },
    {
        imgSrc: '/javascript.svg',
        label: 'JavaScript',
        desc: 'Language'
    },
    {
        imgSrc: '/ts.svg',
        label: 'TypeScript',
        desc: 'Language'
    },

    // 🔹 Databases & Infra
    {
        imgSrc: '/mongodb.svg',
        label: 'MongoDB',
        desc: 'Database'
    },

    // 🔹 Outros
    {
        imgSrc: '/scrum.svg',
        label: 'Scrum',
        desc: 'Agile Methodology'
    }
];

const Skill = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
                <p className="text-zinc-400 mt-3 mb-8 reveal-up">Discover the powerful tools and technologies I use to create exceptional, high‑performing websites, apps & AI solutions.</p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc }, key) => (
                            <SkillCard classes="reveal-up" key={key} imgSrc={imgSrc} label={label} desc={desc} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skill