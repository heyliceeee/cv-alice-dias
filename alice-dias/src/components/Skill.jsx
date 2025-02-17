/**
 * @copyright 2025 Alice Dias
 * @license Apache-2.0
 */

import React from 'react'
import SkillCard from './SkillCard';



const skillItem = [
    {
        imgSrc: 'java.svg',
        label: 'Java',
        desc: 'Language'
    },
    {
        imgSrc: '/csharp.svg',
        label: 'C#',
        desc: 'Language'
    },
    {
        imgSrc: '/scrum.svg',
        label: 'Scrum',
        desc: 'Agile Metodology'
    },
    {
        imgSrc: '/sql.svg',
        label: 'SQL',
        desc: 'Database'
    },
    {
        imgSrc: '/mongodb.svg',
        label: 'MongoDB',
        desc: 'Database'
    },
    {
        imgSrc: '/python.svg',
        label: 'Python',
        desc: 'Language'
    },
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
        imgSrc: '/angular.svg',
        label: 'Angular',
        desc: 'Framework'
    },
    {
        imgSrc: '/ionic.svg',
        label: 'Ionic',
        desc: 'Framework'
    },
    {
        imgSrc: '/swift.svg',
        label: 'Swift',
        desc: 'Language'
    },
    {
        imgSrc: '/figma.svg',
        label: 'Figma',
        desc: 'Design tool'
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
    {
        imgSrc: '/nodejs.svg',
        label: 'NodeJS',
        desc: 'Web Server'
    },

    {
        imgSrc: '/tailwindcss.svg',
        label: 'TailwindCSS',
        desc: 'User Interface'
    }
];

const Skill = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
                <p className="text-zinc-400 mt-3 mb-8 reveal-up">Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.</p>
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