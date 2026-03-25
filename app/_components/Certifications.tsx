'use client';
import SectionTitle from '@/components/SectionTitle';
import { CERTIFICATES } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CertificateItem = ({ item }: { item: any }) => {
    const externalLinkSVGRef = useRef<SVGSVGElement>(null);

    const { context, contextSafe } = useGSAP(() => {}, {
        scope: externalLinkSVGRef,
        revertOnUpdate: true,
    });

    const handleMouseEnter = contextSafe?.(() => {
        const arrowLine = externalLinkSVGRef.current?.querySelector('#arrow-line') as SVGPathElement;
        const arrowCurb = externalLinkSVGRef.current?.querySelector('#arrow-curb') as SVGPathElement;
        const box = externalLinkSVGRef.current?.querySelector('#box') as SVGPathElement;

        if (!arrowLine || !arrowCurb || !box) return;

        gsap.set(box, { opacity: 0, strokeDasharray: box.getTotalLength(), strokeDashoffset: box.getTotalLength() });
        gsap.set(arrowLine, { opacity: 0, strokeDasharray: arrowLine.getTotalLength(), strokeDashoffset: arrowLine.getTotalLength() });
        gsap.set(arrowCurb, { opacity: 0, strokeDasharray: arrowCurb.getTotalLength(), strokeDashoffset: arrowCurb.getTotalLength() });

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
        tl.to(externalLinkSVGRef.current, { autoAlpha: 1 })
          .to(box, { opacity: 1, strokeDashoffset: 0 })
          .to(arrowLine, { opacity: 1, strokeDashoffset: 0 }, '<0.2')
          .to(arrowCurb, { opacity: 1, strokeDashoffset: 0 })
          .to(externalLinkSVGRef.current, { autoAlpha: 0 }, '+=1');
    });

    const handleMouseLeave = contextSafe?.(() => {
        context.kill();
    });

    return (
        <a 
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-item group block py-5 md:border-b first:!pt-0 last:pb-0 last:border-none md:group-hover/certs:opacity-30 md:hover:!opacity-100 transition-all"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <p className="text-xl text-muted-foreground transition-colors">{item.issuer}</p>
            <p className="text-4xl md:text-5xl flex gap-4 font-anton transition-all duration-700 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left leading-none mt-3.5 mb-2.5">
                {item.title}
                <span className="text-foreground opacity-0 group-hover:opacity-100 transition-all flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        ref={externalLinkSVGRef}
                    >
                        <path id="box" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <path id="arrow-line" d="M10 14 21 3"></path>
                        <path id="arrow-curb" d="M15 3h6v6"></path>
                    </svg>
                </span>
            </p>
            <p className="text-lg text-muted-foreground">{item.date}</p>
        </a>
    );
};

const Certifications = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top bottom',
                end: 'top 80%',
                toggleActions: 'restart none none reverse',
                scrub: 1,
            },
        });
        tl.from(containerRef.current, { y: 150, opacity: 0 });
    }, { scope: containerRef });

    return (
        <section className="py-section" id="certifications">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Certifications" />
                <div className="flex flex-col gap-10 group/certs">
                    {CERTIFICATES.map((item) => (
                        <CertificateItem key={item.title} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Certifications;
