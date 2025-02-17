/**
 * @copyright 2025 Alice Dias
 * @license Apache-2.0
 */

import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard';
import { data } from 'autoprefixer';


const API_URL = import.meta.env.VITE_API_URL;


/* const works = [
    {
        imgSrc: '/images/project-1.jpg',
        title: 'Full stack music app',
        tags: ['API', 'MVC', 'Development'],
        projectLink: 'https://musify-5al0.onrender.com/'
    },
    {
        imgSrc: '/images/project-2.jpg',
        title: 'Free stock photo app',
        tags: ['API', 'SPA'],
        projectLink: 'https://pixstock-official.vercel.app/'
    },
    {
        imgSrc: '/images/project-3.jpg',
        title: 'Recipe app',
        tags: ['Development', 'API'],
        projectLink: ''
    },
    {
        imgSrc: '/images/project-4.jpg',
        title: 'Real state website',
        tags: ['Web-design', 'Development'],
        projectLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
        imgSrc: '/images/project-5.jpg',
        title: 'eCommerce website',
        tags: ['eCommerce', 'Development'],
        projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
    {
        imgSrc: '/generatePassword1.png',
        title: 'Password Generator',
        tags: ['Web-design', 'Development'],
        projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
]; */


const Work = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/project`)
            .then((res) => res.json())
            .then((data) => setProjects(data), console.log("PROJETOS: " + data))
            .catch((err) => console.error("Error searching for projects:", err));
    }, []);


    return (
        <section id='work' className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {projects.map(({ id, photo, name, description, url, tecnologies }) => (
                        <ProjectCard key={id} photo={photo} name={name} description={description} url={url} tecnologies={tecnologies.map(t => t.name)} classes="reveal-up" />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work