/**
 * @copyright 2025 Alice Dias
 * @license Apache-2.0
 */

import React from 'react'
import SkillCard from './SkillCard';



const skillItem = [
    {
        imgSrc: '/images/java.svg',
        label: 'Java',
        desc: 'Language'
    },
    {
        imgSrc: '/images/csharp.svg',
        label: 'C#',
        desc: 'Language'
    },
    {
        imgSrc: '/images/scrum.svg',
        label: 'Scrum',
        desc: 'Agile Metodology'
    },
    {
        imgSrc: '/images/sql.svg',
        label: 'SQL',
        desc: 'Database'
    },
    {
        imgSrc: '/images/mongodb.svg',
        label: 'MongoDB',
        desc: 'Database'
    },
    {
        imgSrc: '/images/python.svg',
        label: 'Python',
        desc: 'Language'
    },
    {
        imgSrc: '/images/react.svg',
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc: '/images/flutter.svg',
        label: 'Flutter',
        desc: 'Framework'
    },
    {
        imgSrc: '/images/angular.svg',
        label: 'Angular',
        desc: 'Framework'
    },
    {
        imgSrc: '/images/ionic.svg',
        label: 'Ionic',
        desc: 'Framework'
    },
    {
        imgSrc: '/images/swift.svg',
        label: 'Swift',
        desc: 'Language'
    },
    {
        imgSrc: '/images/figma.svg',
        label: 'Figma',
        desc: 'Design tool'
    },
    {
        imgSrc: '/images/javascript.svg',
        label: 'JavaScript',
        desc: 'Language'
    },
    {
        imgSrc: '/images/ts.svg',
        label: 'TypeScript',
        desc: 'Language'
    },
    {
        imgSrc: '/images/nodejs.svg',
        label: 'NodeJS',
        desc: 'Web Server'
    },

    {
        imgSrc: '/images/tailwindcss.svg',
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