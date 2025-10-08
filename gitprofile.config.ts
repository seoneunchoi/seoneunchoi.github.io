// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'SeonEunChoi', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  about: {
    showAge: true,
    showLocation: true,
    showEmail: true,
    showPhoneNumber: false,
    showFreelance: false,
    showReactIcons: false,
    availability: "Available for opportunities",
    location: "Seoul, South Korea",
    bio: "Passionate AI Convergence student at Sungkyunkwan University. Interested in Computer Vision and AI. I have not yet determined a specific field of interest, and I would like to broaden my knowledge and gain diverse experiences before deciding.",
  },
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'About Me',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'About Me',
          description: 'Passionate AI Convergence student at Sungkyunkwan University. Interested in Computer Vision and AI. I have not yet determined a specific field of interest, and I would like to broaden my knowledge and gain diverse experiences before deciding.',
          imageUrl: '',
          link: '',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of SeonEunChoi', description: 'AI Convergence Student at Sungkyunkwan University', imageURL: '/명륜.webp' },
  social: {
    linkedin: 'SUN',
    x: 'SeonEunChoi',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'nueenus',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'SeonEunChoi',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://www.seoneun.com',
    phone: '',
    email: 'cse0901@g.skku.edu',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C',
    'Node.js',
    'Git',
    'MachineLearning',
    'AI',
    'DataScience',
    'Korean (Native)',
    'English (TEPS 370)',
  ],
  experiences: [
    {
      company: 'brAIn 학회',
      position: 'Member',
      from: '2025',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'AI 해커톤',
      position: 'Participant',
      from: '2025',
      to: '2025',
      companyLink: '',
    },
    {
      company: '뇌학회',
      position: 'Member',
      from: '2024',
      to: '2024',
      companyLink: '',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'Sungkyunkwan University',
      degree: 'Bachelor of Artificial Intelligence Convergence',
      from: '2022',
      to: 'Expected 2026',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: [],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'synthwave',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
