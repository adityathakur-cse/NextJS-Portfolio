'use client';
import SectionTitle from '@/components/SectionTitle';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef, useState } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Contact = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({ name: '', email: '', subject: '' });

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                end: 'bottom bottom',
                toggleActions: 'restart none none reverse',
                scrub: 1,
            },
        });
        tl.from('.contact-item', { y: 50, opacity: 0, stagger: 0.2 });
    }, { scope: containerRef });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <section className="py-section" id="contact-info">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Contact" />
                <div className="grid md:grid-cols-2 gap-14 contact-item items-center">
                    <div>
                        <div className="mb-10">
                            <p className="text-xl text-muted-foreground">Location</p>
                            <p className="text-3xl md:text-4xl font-anton leading-none mt-3.5 mb-2.5">{GENERAL_INFO.location}</p>
                        </div>
                        <div>
                            <p className="text-xl text-muted-foreground">Email</p>
                            <a href={`mailto:${GENERAL_INFO.email}`} className="text-3xl md:text-4xl font-anton leading-none mt-3.5 mb-2.5 hover:text-primary transition-colors block">{GENERAL_INFO.email}</a>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-background-light p-8 rounded-lg border border-white/5">
                        <p className="text-3xl font-anton text-foreground mb-2">Send a Message</p>
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            className="bg-transparent border-b border-muted-foreground/30 px-4 py-3 placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors w-full"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                            className="bg-transparent border-b border-muted-foreground/30 px-4 py-3 placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors w-full"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Your Message"
                            required
                            className="bg-transparent border-b border-muted-foreground/30 px-4 py-3 placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors w-full"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        />
                        <button
                            type="submit"
                            className="mt-6 bg-primary text-primary-foreground font-medium px-8 py-3 rounded-full self-start hover:bg-primary/90 transition-all active:scale-95 shadow-[0_4px_14px_0_rgb(0,0,0,39%)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
export default Contact;
