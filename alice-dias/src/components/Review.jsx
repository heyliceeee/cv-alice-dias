/**
 * @copyright 2025 Alice Dias
 * @license Apache-2.0
 */

import React from 'react'
import ReviewCard from './ReviewCard';
import { ReactLenis } from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';



gsap.registerPlugin(useGSAP, ScrollTrigger); // register the hook to avoid React version discrepancies 


const reviews = [
    {
        content: 'O aluno Alice Dias, mostrou no decorrer do estágio uma enorme capacidade de trabalho tendo conseguido um resultado de excelência. Revelou conhecimentos práticos de programação, com muita facilidade percebeu a organização da empresa tendo colaborado na elaboração de uma coleção digital. O seu relacionamento com os demais professionais da Gierlings Velpor, notabilizou-se pela relação interpessoal que rapidamente conseguiu, revelando forte sentido de humildade, cooperação e interajuda sempre que lhe foi solicitado. Em conclusão direi que foi um estágio bastante produto em que as ambas as partes sairam a ganhar. Parabéns Alice!',
        name: 'Francisco Freitas',
        company: 'Lantal Textiles AG (Gierlings Velpor)'
    },
    {
        content: 'Mentioned in the article about the Professional Aptitude Tests at "Escola Secundária de Tomaz Pelayo".',
        name: 'Edgar Resende Borges',
        company: 'ANPRI'
    }
];


const Review = () => {

    /* useGSAP(() => {
        gsap.to('.scrub-slide', {
            scrollTrigger: {
                trigger: '.scrub-slide',
                scrub: true
            },
            x: '-1000'
        })
    }); */


    return (
        <section id='reviews' className="section overflow-hidden">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">What people say</h2>

                <div className="scrub-slide flex items-stretch gap-3 w-fit">
                    {reviews.map(({ content, name, company }, key) => (
                        <ReviewCard key={key} content={content} name={name} company={company} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Review