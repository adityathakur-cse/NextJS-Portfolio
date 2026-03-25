'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { Github, Linkedin } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useState, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const roles = [
    { first: 'FULL STACK', second: 'DEVELOPER' },
    { first: 'UI/UX', second: 'DESIGNER' },
];

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px] relative">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton relative h-[120px] sm:h-[160px] w-full mt-20 max-md:mt-32">
                        {roles.map((role, idx) => (
                            <span 
                                key={idx} 
                                className={`block absolute top-0 left-0 transition-all duration-1000 ${roleIndex === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                            >
                                <span className="text-primary">{role.first}</span>
                                <br /> <span className="ml-4">{role.second}</span>
                            </span>
                        ))}
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground z-10 w-full relative">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Aditya Kumar Thakur
                        </span>
                        . A creative Full Stack Developer focused on building high-performance, accessible, and
                        responsive web platforms.
                    </p>
                    <div className="flex items-center gap-6 mt-9 slide-up-and-fade z-10 relative">
                        <Button
                            as="link"
                            href={`mailto:${GENERAL_INFO.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="primary"
                            className="banner-button"
                        >
                            Contact Me
                        </Button>
                        <a href={SOCIAL_LINKS.find(s => s.name === 'github')?.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-all hover:scale-110">
                            <Github size={28} />
                        </a>
                        <a href={SOCIAL_LINKS.find(s => s.name === 'linkedin')?.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0a66c2] transition-all hover:scale-110">
                            <Linkedin size={28} />
                        </a>
                        <a href={SOCIAL_LINKS.find(s => s.name === 'twitter')?.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-all hover:scale-110 flex items-center justify-center">
                            <svg viewBox="0 0 24 24" aria-hidden="true" width="24" height="24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.961h-1.04l11.115 13.809z"></path>
                            </svg>
                        </a>
                        <a href={SOCIAL_LINKS.find(s => s.name === 'leetcode')?.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#FFA116] transition-all hover:scale-110 flex items-center justify-center">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.541l11.114 11.232c.563.568 1.5.568 2.063 0 .564-.569.564-1.492 0-2.06l-6.281-6.345c.038-.035.081-.072.119-.107l6.635-6.082a1.38 1.38 0 0 0 .432-.962 1.38 1.38 0 0 0-.432-.962L14.444.437A1.372 1.372 0 0 0 13.483 0zm0 2.768l5.441 4.965-6.002 5.5a1.38 1.38 0 0 0-.431.961 1.38 1.38 0 0 0 .431.962l5.7 5.758-10.435-10.547c-.503-.585-.544-1.428-.124-2.083l3.784-4.051 4.67-4.996a1.376 1.376 0 0 0-.001-.005h.001zM4.408 15.688c.01-.035.021-.067.03-.102l.006-.021z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            100+
                        </h5>
                        <p className="text-muted-foreground">
                            DSA Problems Solved
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            1.5+
                        </h5>
                        <p className="text-muted-foreground">
                            Years of Learning
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            Top 5%
                        </h5>
                        <p className="text-muted-foreground">Hackathon Ranking</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
