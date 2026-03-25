'use client';
import { GENERAL_INFO } from '@/lib/data';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="text-center pb-12" id="contact">
            <div className="container relative">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-14 hover:text-primary transition-colors"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="flex flex-col items-center mt-5 gap-8">
                    <button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex flex-col items-center justify-center gap-3 text-muted-foreground hover:text-white transition-colors group"
                    >
                        <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/20 transition-all shadow-lg active:scale-95">
                            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform group-hover:text-primary" />
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] group-hover:text-primary transition-colors">Back to top</span>
                    </button>

                    <a
                        href="https://github.com/adityathakur-cse"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="leading-none text-muted-foreground hover:text-white transition-colors text-sm mt-4"
                    >
                        Design & built by Aditya Kumar Thakur
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
