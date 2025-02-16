/**
 * @copyright 2025 Alice Dias
 * @license Apache-2.0
 */

import React from 'react'
import { PrimaryButton } from './Button';


const sitemap = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'About Me',
        href: '#about'
    },
    {
        label: 'Projects',
        href: '#work'
    },
    {
        label: 'Reviews',
        href: '#reviews'
    },
    {
        label: 'Contact me',
        href: '#contact'
    }
];

const socials = [
    {
        label: 'GitHub',
        href: 'https://www.github.com/heyliceeee'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/heyliceeee'
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/ui_ux.heyliceeee'
    }
];


const Footer = () => {
    return (
        <footer className="section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch]">Let&apos;s work together today!</h2>

                        <PrimaryButton href='mailto:alicedias2002@hotmail.com' label='Start project' icon='chevron_right' />
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div>
                            <p className="mb-2">Sitemap</p>

                            <ul>
                                {sitemap.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">{label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="">Socials</p>

                            <ul>
                                {socials.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a href={href} target="_blank" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">{label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-10 mb-8">
                    <a href="" className="">
                        <img src="/favicon.ico" width={40} height={40} alt="Logo" className="" />
                    </a>

                    <p className="text-zinc-500 text-sm">
                        &copy; 2025 <span className="text-zinc-200">Alice Dias</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer