'use client';
import SectionTitle from '@/components/SectionTitle';
import { EDUCATION } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Education = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 60%',
                end: 'bottom 50%',
                toggleActions: 'restart none none reverse',
                scrub: 1,
            },
        });
        tl.from('.education-item', { y: 50, opacity: 0, stagger: 0.3 });
    }, { scope: containerRef });

    return (
        <section className="py-section" id="education">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Education" />
                <div className="grid gap-14">
                    {EDUCATION.map((item) => (
                        <div key={item.degree} className="education-item">
                            <p className="text-xl text-muted-foreground">{item.institution} — {item.location}</p>
                            <p className="text-4xl md:text-5xl font-anton leading-none mt-3.5 mb-2.5">{item.degree}</p>
                            <div className="flex justify-between items-center text-lg text-muted-foreground flex-wrap">
                                <span>{item.duration}</span>
                                <span>{item.score}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Education;
