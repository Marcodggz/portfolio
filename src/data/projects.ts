import type { ProjectData } from '../types'
import jammmingImage from '../assets/jammming-screenshot.png'
import portfolioImage from '../assets/portfolio-screenshot.png'

export const projects: ProjectData[] = [
  {
    title: 'Jammming',
    description:
      'React playlist builder that lets users search tracks, create playlists, and save them to Spotify using the Spotify Web API and OAuth PKCE. Includes a demo mode so anyone can try the main flows without Spotify access.',
    image: jammmingImage,
    imageAlt: 'Screenshot of the Jammming app showing track search and an editable playlist',
    technologies: ['React', 'JavaScript', 'Spotify API', 'OAuth PKCE', 'CSS'],
    liveUrl: 'https://jammming-navy.vercel.app/',
    githubUrl: 'https://github.com/Marcodggz/jammming',
  },
  {
    title: 'Frontend Portfolio',
    description:
      'Personal frontend portfolio built with React, TypeScript and CSS Modules. It showcases selected projects, responsive layouts, accessible contact flows, and a clean component-based structure.',
    image: portfolioImage,
    imageAlt: 'Screenshot of the Frontend Portfolio home page layout',
    technologies: ['React', 'TypeScript', 'CSS Modules'],
    githubUrl: 'https://github.com/Marcodggz/portfolio',
  },
]
