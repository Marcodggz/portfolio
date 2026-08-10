import type { ProjectData } from '../types'
import jammmingImage from '../assets/jammming-screenshot.webp'
import portfolioImage from '../assets/portfolio-screenshot.webp'
import bellokImage from '../assets/bellok.webp'
import dayzImage from '../assets/DayZ.webp'

export const projects: ProjectData[] = [
  {
    title: 'Jammming',
    descriptionKey: 'jammmingDescription',
    image: jammmingImage,
    imageAlt: 'Screenshot of the Jammming app showing track search and an editable playlist',
    technologies: ['React', 'JavaScript', 'Spotify API', 'OAuth PKCE', 'CSS'],
    liveUrl: 'https://jammming-navy.vercel.app/',
    githubUrl: 'https://github.com/Marcodggz/jammming',
  },
  {
    title: 'Portfolio',
    descriptionKey: 'portfolioDescription',
    image: portfolioImage,
    imageAlt: 'Screenshot of the Portfolio home page layout',
    technologies: ['React', 'TypeScript', 'CSS Modules'],
    liveUrl: 'https://tu-portfolio-url.vercel.app/', // Uncomment when deployed
    githubUrl: 'https://github.com/Marcodggz/portfolio',
  },
  {
    title: "Bellok's Killfeed",
    descriptionKey: 'bellokDescription',
    image: bellokImage,
    imageAlt: "Bellok's Killfeed project placeholder",
    technologies: ['TypeScript','Node.js', 'Discord.js', 'Nitrado API', 'GitHub Actions'],
    githubUrl: 'https://github.com/Marcodggz/bellok-dayz-bot',
  },
  {
    title: 'DayZ Vanilla+ Server',
    descriptionKey: 'dayzDescription',
    image: dayzImage,
    imageAlt: 'DayZ Vanilla + Server project placeholder',
    technologies: ['XML', 'JSON', 'Python', 'Shell', 'GitHub Actions'],
    githubUrl: 'https://github.com/Marcodggz/DayZ-Vanilla-Plus-Server',
  },
]
