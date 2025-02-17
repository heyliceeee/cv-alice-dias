/**
 * @copyright 2025 Alice Dias
 * @license Apache-2.0
 */

import React from 'react'
import ProjectCard from './ProjectCard';
import { data } from 'autoprefixer';


const API_URL = import.meta.env.VITE_API_URL;


const projects = [
    {
        id: 14,
        photo: 'weatherApp.png',
        name: 'WeatherTrack',
        tecnologies: ['Vue.js', 'Bootstrap', 'API', 'Chart.js', 'Javascript'],
        url: 'https://github.com/heyliceeee/plataforma-de-gestao'
    },
    {
        id: 13,
        photo: 'restaurant-dashboard.jpg',
        name: 'Restaurant - Dashboard',
        tecnologies: ['Vue.js', 'JSON Server', 'Ant Design', 'ECharts', 'Javascript'],
        url: 'https://github.com/heyliceeee/vuejs-course'
    },
    {
        id: 12,
        photo: 'sd.png',
        name: 'Distributed Communication System',
        tecnologies: ['Java', 'TCP', 'RSA', 'Multithreading'],
        url: 'https://github.com/heyliceeee/SD-trabalhoPratico'
    },
    {
        id: 11,
        photo: 'tocruz.png',
        name: 'Mission Simulator - To Cruz',
        tecnologies: ['ADT', 'Java', 'JavaFX'],
        url: 'https://github.com/heyliceeee/simulador-missoes-to-cruz'
    },
    {
        id: 10,
        photo: 'si-levexpress.png',
        name: 'LevExpress - Delivery Management',
        tecnologies: ['Camunda', 'Spring Boot', 'Java', 'Task Automation'],
        url: 'https://github.com/heyliceeee/SI-levExpress'
    },
    {
        id: 9,
        photo: 'crossfit-cards.png',
        name: 'Crossfit Cards',
        tecnologies: ['Angular', 'TypeScript', 'Bootstrap', 'CSS'],
        url: 'https://github.com/heyliceeee/crossfit-cards'
    },
    {
        id: 8,
        photo: 'sweetRicers.png',
        name: 'Sweet Ricers',
        tecnologies: ['React', 'JavaScript', 'Ant Design', 'CSS'],
        url: 'https://sweet-ricers.vercel.app/'
    },
    {
        id: 7,
        photo: 'robocode.jpg',
        name: 'Robocode',
        tecnologies: ['Java', 'Machine Learning', 'Robocode', 'H20'],
        url: 'https://github.com/heyliceeee/robocodeIA'
    },
    {
        id: 6,
        photo: 'nei.png',
        name: 'NEI Website',
        tecnologies: ['React', 'TypeScript', 'Material-UI'],
        url: 'https://nei-estg.org/'
    },
    {
        id: 5,
        photo: 'trazCa.png',
        name: 'Traz Cá - Food Delivery App',
        tecnologies: ['JavaScript', 'React Native', 'CSS'],
        url: 'https://github.com/heyliceeee/trazcaApp'
    },
    {
        id: 4,
        photo: 'captureTheFlag.jpg',
        name: 'Capture the Flag Game',
        tecnologies: ['Java', 'JavaFX'],
        url: 'https://github.com/heyliceeee/capture-the-flag'
    },
    {
        id: 3,
        photo: 'generatePassword.png',
        name: 'Password Generator',
        tecnologies: ['JavaScript', 'React Native', 'CSS', 'Expo'],
        url: 'https://github.com/heyliceeee/passwordGenerator'
    },
    {
        id: 2,
        photo: 'spaceFlightNews.png',
        name: 'Space Flight News',
        tecnologies: ['Swift', 'API', 'Firebase'],
        url: 'https://github.com/heyliceeee/spaceFlightNews'
    },
    {
        id: 1,
        photo: 'smsSystem.png',
        name: 'SMS System',
        tecnologies: ['C#', 'ASP .NET Core', 'SQL Server', 'Xamarin', 'IIS'],
        url: ''
    },
];


const Work = () => {

    return (
        <section id='work' className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {projects.map(({ id, photo, name, description, url, tecnologies }) => (
                        <ProjectCard key={id} photo={photo} name={name} description={description} url={url} tecnologies={tecnologies} classes="reveal-up" />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work