'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from '@/components/Button';

const MENU_LINKS = [
    { name: 'Home', url: '/', id: 'banner' },
    { name: 'About', url: '/#about-me', id: 'about-me' },
    { name: 'Experience', url: '/#my-experience', id: 'my-experience' },
    { name: 'Projects', url: '/#selected-projects', id: 'selected-projects' },
    { name: 'Education', url: '/#education', id: 'education' },
    { name: 'Certifications', url: '/#certifications', id: 'certifications' },
    { name: 'Achievements', url: '/#achievements', id: 'achievements' },
    { name: 'Contact', url: '/#contact-info', id: 'contact-info' },
];

const Navbar = () => {
    const router = useRouter();
    const [activeSection, setActiveSection] = useState<string>('banner');
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Update active section only when entry becomes highly visible
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0px -70% 0px' }
        );

        const timeoutId = setTimeout(() => {
            MENU_LINKS.forEach((link) => {
                if (link.id) {
                    const el = document.getElementById(link.id);
                    if (el) observer.observe(el);
                }
            });
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[50] w-full bg-background/80 backdrop-blur-xl border-b border-white/5 pointer-events-auto transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="flex items-center justify-between w-full px-5 md:px-10 py-4 max-lg:flex-col max-lg:gap-4">
                
                <div className="flex-none max-lg:w-full max-lg:flex max-lg:justify-between max-lg:items-center">
                    <span className="font-anton text-2xl tracking-wide text-foreground lg:absolute lg:left-10 lg:top-1/2 lg:-translate-y-1/2">
                        AT.
                    </span>
                    <Button 
                        as="link"
                        href="https://drive.google.com/file/d/1D_exUDxjuIXNq_N6ii707YSLWn-L48cO/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        variant="primary" 
                        className="lg:absolute lg:right-10 lg:top-1/2 lg:-translate-y-1/2 scale-75 md:scale-90 lg:scale-100 origin-right"
                    >
                        Resume
                    </Button>
                </div>

                <div className="flex items-center gap-6 lg:gap-8 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 justify-start lg:justify-center mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {MENU_LINKS.map((link) => {
                        const isActive = activeSection === link.id;
                        return (
                            <button
                                key={link.name}
                                onClick={() => router.push(link.url)}
                                className={`relative flex items-center gap-2 transition-colors text-sm lg:text-base font-anton tracking-widest uppercase whitespace-nowrap ${isActive ? 'text-foreground' : 'text-muted-foreground hover:text-white'}`}
                            >
                                {isActive && (
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                )}
                                {link.name}
                            </button>
                        );
                    })}
                </div>
                
            </div>
        </nav>
    );
};

export default Navbar;
