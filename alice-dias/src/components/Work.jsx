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
        id: 17,
        photo: 'energyConsumption.jpg',
        name: 'Energy Consumption Forecasting with Machine Learning Models',
        tecnologies: ['Data Science', 'Scientific Research', 'Time Series', 'Python', 'Artificial Intelligence'],
        url: 'https://github.com/heyliceeee/previsao-do-consumo-energetico-com-ml'
    },
    {
        id: 16,
        photo: 'candyCrush.png',
        name: 'Candy Crush YOLO',
        tecnologies: ['Data Science', 'Machine Learning', 'Automation', 'Python', 'Artificial Intelligence'],
        url: 'https://github.com/heyliceeee/2025-ia-trabalhopratico'
    },
    {
        id: 15,
        photo: 'si-levexpress.png',
        name: 'LevExpress - Delivery Orchestration (Java + BPMN)',
        tecnologies: ['API REST', 'Java', 'Spring Boot', 'Automation', 'Camunda BPM'],
        url: 'https://github.com/heyliceeee/SI-levExpress'
    },
     {
        id: 14,
        photo: 'levexpress.png',
        name: 'LevExpress - Delivery System (Mobile App + Backoffice + Backend)',
        tecnologies: ['Flutter', 'Docker', 'PostgreSQL', 'ASP.NET', 'Agile Methodologies', 'UML', 'API REST'],
        url: ''
    },
    {
        id: 13,
        photo: 'tocruz.png',
        name: 'Mission Simulator - To Cruz',
        tecnologies: ['Java', 'JavaFX', 'Automation', 'ADT'],
        url: 'https://github.com/heyliceeee/simulador-missoes-to-cruz'
    },
    {
        id: 12,
        photo: 'sd.png',
        name: 'Distributed Communication System',
        tecnologies: ['Encryption', 'Java', 'Multithreading', 'TCP Sockets'],
        url: 'https://github.com/heyliceeee/SD-trabalhoPratico'
    },
    {
        id: 11,
        photo: 'robocode.jpg',
        name: 'Robocode – Robot Combat with AI Strategies',
        tecnologies: ['Data Science', 'Java', 'Automation', 'Artificial Intelligence'],
        url: 'https://github.com/heyliceeee/robocodeIA'
    },
     {
        id: 10,
        photo: 'nei.png',
        name: 'NEI@ESTG website',
        tecnologies: ['React', 'TypeScript', 'Material-UI', 'Docker'],
        url: ''
    },
    {
        id: 9,
        photo: 'captureTheFlag.jpg',
        name: 'Capture the Flag Game – Strategic Simulator with Data Structures',
        tecnologies: ['Java', 'JavaFX', 'Automation', 'ADT'],
        url: 'https://github.com/heyliceeee/capture-the-flag'
    },
    {
        id: 8,
        photo: 'trazCa.png',
        name: 'Traz Cá - Food Delivery App',
        tecnologies: ['JavaScript', 'React Native', 'Ant Design'],
        url: 'https://github.com/heyliceeee/trazcaApp'
    },
    {
        id: 7,
        photo: 'generatePassword.png',
        name: 'Password Generator - Password Generation and Management App',
        tecnologies: ['JavaScript', 'React Native', 'CSS'],
        url: 'https://github.com/heyliceeee/passwordGenerator'
    },
    {
        id: 6,
        photo: 'smsSystem.png',
        name: 'SMS System',
        tecnologies: ['C#', 'ASP.NET', 'SQL', 'Xamarin'],
        url: ''
    },
    {
        id: 5,
        photo: 'spaceFlightNews.png',
        name: 'Space Flight News – Space News App for iOS',
        tecnologies: ['Swift', 'API REST', 'Firebase'],
        url: 'https://github.com/heyliceeee/spaceFlightNews'
    },
    {
        id: 4,
        photo: 'crossfit-cards.png',
        name: 'Crossfit Cards',
        tecnologies: ['Angular', 'JavaScript', 'Bootstrap', 'API REST'],
        url: 'https://github.com/heyliceeee/crossfit-cards'
    },
    {
        id: 3,
        photo: 'sweetRicers.png',
        name: 'Sweet Ricers',
        tecnologies: ['React', 'JavaScript', 'Ant Design', 'CSS'],
        url: 'https://sweet-ricers.vercel.app/'
    },
    {
        id: 2,
        photo: 'weatherApp.png',
        name: 'WeatherTrack',
        tecnologies: ['Vue.js', 'Bootstrap', 'API', 'Chart.js', 'Javascript'],
        url: 'https://github.com/heyliceeee/plataforma-de-gestao'
    },
    {
        id: 1,
        photo: 'restaurant-dashboard.jpg',
        name: 'Restaurant - Dashboard',
        tecnologies: ['Vue.js', 'JSON Server', 'Ant Design', 'ECharts', 'Javascript'],
        url: 'https://github.com/heyliceeee/vuejs-course'
    }
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