import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'adithakurji@gmail.com',
    location: 'Jamshedpur, Jharkhand',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Aditya, I am reaching out to you because...',

    oldPortfolio: '',
    upworkProfile: '',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/adityathakur-cse' },
    { name: 'linkedin', url: 'https://linkedin.com/in/ad1tyathakur/' },
    { name: 'twitter', url: 'https://x.com/aadi_thakurr' },
    { name: 'leetcode', url: 'https://leetcode.com/u/ad1tyathakur/' },
];

export const MY_STACK = {
    frontend: [
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'React', icon: '/logo/react.png' },
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'Redux', icon: '/logo/redux.png' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
        { name: 'Bootstrap', icon: '/logo/bootstrap.svg' },
    ],
    backend: [
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'Express.js', icon: '/logo/express.png' },
    ],
    database: [
        { name: 'MySQL', icon: '/logo/mysql.svg' },
        { name: 'PostgreSQL', icon: '/logo/postgreSQL.png' },
        { name: 'MongoDB', icon: '/logo/mongodb.svg' },
    ],
    tools: [
        { name: 'Git', icon: '/logo/git.png' },
        // { name: 'GitHub', icon: '' },
        // { name: 'VSCode', icon: '' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'CareerX',
        slug: 'careerx',
        year: 2025,
        description: `Designed and delivered a full-stack web platform to connect students with internship and placement opportunities through a centralized application system.<br/><br/>
                      Achieved strong Lighthouse scores with 95/100 Performance, 93/100 Accessibility, and 82/100 SEO.`,
        role: `Added a dedicated internships & jobs section enabling company postings and student applications, featuring detailed roles, eligibility, stipends, timelines, and full CRUD functionality.`,
        techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS', ],
        thumbnail: '/projects/thumbnail/careerx.png',
        longThumbnail: '/projects/long/careerx.png',
        images: ['/projects/images/careerx.png'],
        sourceCode: 'https://github.com/adityathakur-cse/CareerX',
        liveUrl: 'https://careerx-one.vercel.app/',
    },
    {
        title: 'EditAura',
        slug: 'editaura',
        year: 2025,
        description: `Built a platform to sell digital assets like color correction presets and After Effects templates, along with offering professional video editing services to help creators produce high-quality content efficiently.`,
        role: ``,
        techStack: ['HTML', 'Tailwind CSS', 'JavaScript', 'UI/UX Designing'],
        thumbnail: '/projects/thumbnail/reeler.png',
        longThumbnail: '/projects/long/reeler.png',
        images: ['/projects/images/reeler.png'],
        sourceCode: 'https://github.com/adityathakur-cse/cc-payment-page',
        liveUrl: 'https://reeleraepcc.vercel.app/',
    },
    {
        title: 'HabitBuddy',
        slug: 'habitbuddy',
        year: 2025,
        description: `Habit Tracking & Focus Enhancement Application.<br/><br/>Built HabitBuddy to help users develop consistent habits through a clear, visual tracking experience. Offered features such as heatmap streaks, habit calendar, reminders, focus sessions with distraction blocking, user profiles, and review submissions to enhance overall usability.`,
        role: `Added complete CRUD functionality for auth, reviews, user data, and progress tracking, improving overall user interaction by 6% through smoother updates and faster data handling.`,
        techStack: ['HTML5', 'Tailwind CSS', 'PHP', 'JavaScript'],
        thumbnail: '/projects/thumbnail/habit.png',
        longThumbnail: '/projects/long/habit.png',
        images: ['/projects/images/habit.png'],
        sourceCode: 'https://github.com/adityathakur-cse/HabitBuddy',
        liveUrl: '#',
    },
    {
        title: 'Vaishali',
        slug: 'vaishali',
        year: 2024,
        description: `E-Commerce Platform`,
        role: `UI/UX Design Revamp`,
        techStack: ['UI/UX','HTML5', 'Tailwind CSS', 'JavaScript'],
        thumbnail: '/projects/thumbnail/vaishali.png',
        longThumbnail: '/projects/long/vaishali.png',
        images: ['/projects/images/vaishali.png'],
        sourceCode: 'https://github.com/adityathakur-cse/vaishali',
        liveUrl: 'https://vaishalistore.vercel.app/',
    }
];

export const MY_EXPERIENCE = [
    {
        title: 'Frontend Developer (Freelance)',
        company: 'Client Project – Website UI/UX Revamp',
        duration: 'November 2025 - December 2025',
    },
    {
        title: 'Teacher (Volunteer)',
        company: 'Nari Shakti Jagran Samiti (NGO)',
        duration: 'June 2024 – August 2024',
    }
];

export const EDUCATION = [
    {
        degree: 'B.Tech in Computer Science and Engineering',
        institution: 'Lovely Professional University',
        location: 'Phagwara, Punjab',
        duration: '2023 – Present',
        score: 'CGPA: 7.71',
    },
    {
        degree: 'Intermediate (12th)',
        institution: 'Jusco School South Park',
        location: 'Jamshedpur, Jharkhand',
        duration: '2022 – 2023',
        score: 'Percentage: 70.8%',
    },
    {
        degree: 'Matriculation (10th)',
        institution: 'Jusco School South Park',
        location: 'Jamshedpur, Jharkhand',
        duration: '2020 – 2021',
        score: 'Percentage: 68.4%',
    }
];

export const CERTIFICATES = [
    {
        title: 'Developing Front End Apps with React',
        issuer: 'Coursera',
        date: 'February 2026',
        url: 'https://coursera.org/share/825f2b2f8cb92ee3783b66fae6b81009',
    },
    {
        title: 'SQL (Intermediate)',
        issuer: 'HackerRank',
        date: 'February 2026',
        url: 'https://www.hackerrank.com/certificates/0de4ce291dbb',
    },
    {
        title: 'Build Generative AI Apps and Solutions with No-Code Tools',
        issuer: 'Infosys Springboard',
        date: 'August 2025',
        url: 'https://drive.google.com/file/d/1bbS6DwQ4VWNAsXwx_9e__QGxVzErtNqh/view?usp=sharing',
    }
];

export const ACHIEVEMENTS = [
    {
        title: 'Solved 100+ DSA problems',
        description: 'Focus on optimization and logic building on Leetcode and GFG.',
        date: 'March 2026',
    },
    {
        title: 'GitHub badges',
        description: 'Earned GitHub badges for consistent commit activity and open-source contributions.',
        date: 'December 2025',
    },
    {
        title: 'Top 10 in Hackathon',
        description: 'Secured a Top 10 position in a hackathon conducted at Lovely Professional University.',
        date: 'March 2024',
    }
];
