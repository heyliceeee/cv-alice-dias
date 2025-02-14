/**
 * @copyright 2025 Alice Dias
 * @license Apache-2.0
 */

import React from 'react'
import SkillCard from './SkillCard';



const skillItem = [
    {
        imgSrc: '/public/java.svg',
        label: 'Java',
        desc: 'Language'
    },
    {
        imgSrc: '/public/csharp.svg',
        label: 'C#',
        desc: 'Language'
    },
    {
        imgSrc: '/public/scrum.svg',
        label: 'Scrum',
        desc: 'Agile Metodology'
    },
    {
        imgSrc: '/public/sql.svg',
        label: 'SQL',
        desc: 'Database'
    },
    {
        imgSrc: '/public/mongodb.svg',
        label: 'MongoDB',
        desc: 'Database'
    },
    {
        imgSrc: '/public/python.svg',
        label: 'Python',
        desc: 'Language'
    },
    {
        imgSrc: '/public/react.svg',
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc: '/public/flutter.svg',
        label: 'Flutter',
        desc: 'Framework'
    },
    {
        imgSrc: '/public/angular.svg',
        label: 'Angular',
        desc: 'Framework'
    },
    {
        imgSrc: '/public/ionic.svg',
        label: 'Ionic',
        desc: 'Framework'
    },
    {
        imgSrc: '/public/swift.svg',
        label: 'Swift',
        desc: 'Language'
    },
    {
        imgSrc: '/public/figma.svg',
        label: 'Figma',
        desc: 'Design tool'
    },
    {
        imgSrc: '/public/javascript.svg',
        label: 'JavaScript',
        desc: 'Language'
    },
    {
        imgSrc: '/public/ts.svg',
        label: 'TypeScript',
        desc: 'Language'
    },
    {
        imgSrc: '/public/nodejs.svg',
        label: 'NodeJS',
        desc: 'Web Server'
    },

    {
        imgSrc: '/public/tailwindcss.svg',
        label: 'TailwindCSS',
        desc: 'User Interface'
    }
];

const Skill = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2">Essential Tools I use</h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.</p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc }, key) => (
                            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skill