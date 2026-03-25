'use client';
import SectionTitle from '@/components/SectionTitle';
import { ACHIEVEMENTS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Achievements = () => {
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
        tl.from('.achieve-item', { y: 50, opacity: 0, stagger: 0.3 });
    }, { scope: containerRef });

    return (
        <section className="py-section" id="achievements">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Achievements" />
                <div className="grid gap-14">
                    {ACHIEVEMENTS.map((item) => (
                        <div key={item.title} className="achieve-item">
                            <p className="text-xl text-muted-foreground">{item.date}</p>
                            <p className="text-4xl md:text-5xl font-anton leading-none mt-3.5 mb-2.5">{item.title}</p>
                            <p className="text-lg text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Achievements;
